import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},

  // add middleware to ignore serializableCheck
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
