export const LOADER_LOADING = 'LOADER_LOADING';

export let isLoading = (state) => {
  return {
    type: LOADER_LOADING,
    state
  }
}