import { LOADER_LOADING } from "../../constants/actions";

export let isLoading = (state) => {
  return {
    type: LOADER_LOADING,
    state
  }
}