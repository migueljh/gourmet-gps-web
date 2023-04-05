import { useCallback, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAddressSuggestions } from "../../controllers/locationController";

import {
  setSuggestions,
  setSelectedLocation,
  setLatitude,
  setLongitude,
} from "../../store/slices/locationSlice";
import { RootState } from "../../store/store";

import { Orbit } from "@uiball/loaders";
import { CloseIcon, SearchMapIcon } from "../../assets";

import NoDataFound from "../NoDataFound";
import SearchBar from "../SearchBar/index";
import SuggestionsList from "../SuggestionList/index";

import { SearchModalInterface, SuggestionInterface } from "../../interfaces";

import styles from "./search-modal.module.scss";

const SearchModal = ({
  setIsOpen,
  getCurrentLocation,
}: SearchModalInterface): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { suggestions } = useSelector((state: RootState) => state.location);
  const latitude = useSelector((state: RootState) => state.location.latitude);
  const longitude = useSelector((state: RootState) => state.location.longitude);
  const isLatitudeAndLongitude = latitude !== null && longitude !== null;

  const dispatch = useDispatch();

  const fetchSuggestions = useCallback(async () => {
    setLoading(true);
    try {
      const results = await getAddressSuggestions(input);
      dispatch(setSuggestions(results));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [input, dispatch]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    },
    []
  );

  const handleSuggestionClick = useCallback(
    (suggestion: SuggestionInterface) => {
      dispatch(setSelectedLocation(suggestion.secondaryText));
      dispatch(setLatitude(null));
      dispatch(setLongitude(null));
      setIsOpen(false);
    },
    [dispatch, setIsOpen]
  );

  const debounceFetchSuggestions = useCallback(() => {
    /* This is to prevent multiple requests to the server in quick succession 
    when the user keeps typing in the input box. */
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (input.trim().length > 3) {
      debounceTimer.current = setTimeout(() => {
        fetchSuggestions();
      }, 500);
    } else {
      dispatch(setSuggestions([]));
    }
  }, [input, fetchSuggestions, dispatch]);

  useEffect(() => {
    debounceFetchSuggestions();

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [debounceFetchSuggestions]);

  return (
    <>
      <div
        className={styles.searchModalOpacityBackground}
        onClick={() => setIsOpen(false)}
      />

      <div className={styles.searchModalWrapper}>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close search modal"
        >
          <i>
            <CloseIcon />
          </i>
        </button>

        <header>
          <p className={styles.searchModalTitle}>Enter your address</p>
        </header>

        <SearchBar
          value={input}
          onChange={handleInputChange}
          placeholder="Search for an address"
        />

        {input.length === 0 ? (
          <>
            <button
              className={styles.searchModalCurrentAddress}
              onClick={() => {
                getCurrentLocation();
                setIsOpen(false);
              }}
              disabled={isLatitudeAndLongitude}
            >
              <SearchMapIcon />
              <p
                className={
                  isLatitudeAndLongitude
                    ? styles.searchModalActiveLocation
                    : styles.searchModalNotActiveLocation
                }
              >
                {isLatitudeAndLongitude
                  ? "You are using your current address"
                  : "I want to use my current address"}
              </p>
            </button>
            <div className={styles.searchModalGreyLine} />
          </>
        ) : null}

        {loading ? (
          <div className={styles.searchModalSpinnerContainer}>
            <Orbit size={35} color="#f8884f" />
          </div>
        ) : suggestions.length > 0 ? (
          <SuggestionsList
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        ) : input.length > 3 && suggestions.length === 0 && !loading ? (
          <div className={styles.searchModalNoResults}>
            <NoDataFound text={"No results found."} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchModal;
