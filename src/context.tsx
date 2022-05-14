import { createContext, useReducer } from "react";
enum DarkModeActionType {
  TOGGLE = "TOGGLE_DARK_MODE",
}

interface DarkModeAction {
  type: DarkModeActionType;
  payload?: any;
}

interface ToggleState {
  darkMode: boolean;
}

export const ThemeContext = createContext<any>(null);

const INITIAL_STATE: ToggleState = { darkMode: true };

const themeReducer = (state: ToggleState, action: DarkModeAction) => {
  switch (action.type) {
    case DarkModeActionType.TOGGLE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props: any) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  console.log("state", state);

  return (
    //@ts-ignore
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
