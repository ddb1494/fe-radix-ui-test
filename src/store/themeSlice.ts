import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  resolvedTheme: "light" | "dark";
}

const getSystemTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme") as ThemeMode;
    if (stored && ["light", "dark", "system"].includes(stored)) {
      return stored;
    }
  }
  return "system";
};

const resolveTheme = (mode: ThemeMode): "light" | "dark" => {
  if (mode === "system") {
    return getSystemTheme();
  }
  return mode;
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
  resolvedTheme: resolveTheme(getInitialTheme()),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      state.resolvedTheme = resolveTheme(action.payload);

      // localStorage에 저장
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
    },
    updateSystemTheme: (state) => {
      if (state.mode === "system") {
        state.resolvedTheme = getSystemTheme();
      }
    },
  },
});

export const { setTheme, updateSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
