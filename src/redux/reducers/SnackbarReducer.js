const initialState = {
  snackbarOpen: false,
  snackbarType: "",
  snackbarMessage: "",
};

const SnackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SNACKBAR":
      const { snackbarOpen, snackbarType, snackbarMessage } = action.payload;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
      };
    default:
      return state;
  }
};

export default SnackbarReducer;
