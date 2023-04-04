import React from "react";

import { SuggestionsListInterface } from "../../interfaces";

import { LocationIcon } from "../../icons";

import styles from "./suggestion-list.module.scss";

const SuggestionsList = ({
  suggestions,
  onSuggestionClick,
}: SuggestionsListInterface): JSX.Element => {
  return (
    <ul className={styles.suggestionListParent}>
      {suggestions.map((suggestion, idx) => (
        <li
          key={idx}
          onClick={() => onSuggestionClick(suggestion)}
          className={styles.suggestionList}
        >
          <button className={styles.suggestionListSelectableElement}>
            <i>
              <LocationIcon />
            </i>
            {suggestion.secondaryText}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SuggestionsList);
