import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import eventReducer from "../features/auth/events/eventSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
  },
})

