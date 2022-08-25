const initialState = {
  theme: "LIGHT",
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME_SWITCH":
      const { theme } = action.payload;

      return {
        ...state,
        theme,
      };

    default:
      return state;
  }
};

export default ThemeReducer;
