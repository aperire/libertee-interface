export const SwitchTheme = (theme) => {
  return {
    type: "THEME_SWITCH",
    payload: {
      theme,
    },
  };
};
