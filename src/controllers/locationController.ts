import { geocodeAddress } from "../services/locationService";
import {
  AddressSuggestionInterface,
  AddressSuggestionResponseInterface,
} from "../interfaces";

export const getAddressSuggestions = async (
  input: string
): Promise<AddressSuggestionInterface[]> => {
  try {
    const data = await geocodeAddress(input);

    const suggestions = data.features.map(
      (feature: AddressSuggestionResponseInterface) => ({
        placeId: feature.id,
        mainText: feature.text,
        secondaryText: feature.place_name,
      })
    );

    return suggestions;
  } catch (error) {
    console.error("Error fetching address suggestions:", error);
    throw error;
  }
};
