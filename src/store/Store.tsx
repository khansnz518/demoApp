import { configureStore } from '@reduxjs/toolkit'
import ReminderSlice from './Reminder/ReminderSlice'

export default configureStore({
  reducer: {
    reminder : ReminderSlice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})