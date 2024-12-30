import { selector } from "recoil";
import { searchQueryAtom } from "../Atoms/search-query-atom";
import axios from "axios";
export const searchQuerySelector = selector({
  key: "searchQuerySelector",
  get: async ({ get }) => {
    const query = get(searchQueryAtom);
    if (!query) return null;

    try {
      //don't forget to add await , took me 1 day to figure out this bug.
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to fetch data";
    }
  },
});

