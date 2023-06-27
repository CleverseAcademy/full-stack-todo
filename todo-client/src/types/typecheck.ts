export const isDataIsReady = <D>(
  data: D | null,
  isLoading: boolean,
  error: unknown,
): data is D => {
  return !!data && !isLoading && !error
}
