export const removeSnackbar = (
  snackbarOpen,
  snackbarType = "",
  snackbarMessage = ""
) => ({
  type: "SET_SNACKBAR",
  payload: {
    snackbarOpen,
    snackbarType,
    snackbarMessage,
  },
});

export const setSnackbar = (open, type, mess) => {
  return {
    type: "SET_SNACKBAR",
    payload: {
      snackbarOpen: open,
      snackbarType: type,
      snackbarMessage: mess,
    },
  };
};
