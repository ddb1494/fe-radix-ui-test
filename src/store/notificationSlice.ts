import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface NotificationSettings {
  push: boolean;
  email: boolean;
  slack: boolean;
}

interface NotificationState {
  comments: NotificationSettings;
  favorites: NotificationSettings;
  newDocuments: NotificationSettings;
}

const initialState: NotificationState = {
  comments: {
    push: true,
    email: true,
    slack: false,
  },
  favorites: {
    push: true,
    email: true,
    slack: false,
  },
  newDocuments: {
    push: true,
    email: true,
    slack: false,
  },
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    toggleNotification: (
      state,
      action: PayloadAction<{
        category: keyof NotificationState;
        type: keyof NotificationSettings;
      }>
    ) => {
      const { category, type } = action.payload;
      state[category][type] = !state[category][type];
    },
    updateNotificationSettings: (
      state,
      action: PayloadAction<{
        category: keyof NotificationState;
        settings: Partial<NotificationSettings>;
      }>
    ) => {
      const { category, settings } = action.payload;
      state[category] = { ...state[category], ...settings };
    },
  },
});

export const { toggleNotification, updateNotificationSettings } =
  notificationSlice.actions;
export default notificationSlice.reducer;
