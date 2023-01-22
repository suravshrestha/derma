import { configureStore } from "@reduxjs/toolkit";

import loggedUserReducer from "./reducers/loggedUserReducer";
import notificationReducer from "./reducers/notificationReducer";

// Configure the Redux store holding the state of the app.
const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    notification: notificationReducer,
  },
});

export default store;
