import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import teamReducer from "./teamSlice";
import notificationReducer from "./notificationSlice";
import todoReducer from "./todoSlice";
import activityReducer from "./activitySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    team: teamReducer,
    notification: notificationReducer,
    todo: todoReducer,
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
