import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
  },
});

const { showNotification } = notificationSlice.actions;

let timeoutId;
export const setNotification = (notification, timeoutInSeconds = 5) => {
  return async (dispatch) => {
    dispatch(showNotification(notification));
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      dispatch(showNotification(null));
    }, timeoutInSeconds * 1000);
  };
};

export default notificationSlice.reducer;
