import { createSlice } from "@reduxjs/toolkit";

type Reminder = {
    title: string;
    completed: boolean;
  };
  
  const defaultReminders: Reminder[] = [
    {
      title: 'React native for Macos',
      completed: false,
    },
    {
      title: 'Build exciting apps',
      completed: false,
    },
    {
      title: 'Be happy',
      completed: true,
    },
  ];

export const ReminderSlice = createSlice({
    name : 'reminder',
    initialState : {
        reminder: defaultReminders,
        newReminder : ''
    },
    reducers :{

    }
})

export const {} = ReminderSlice.actions

export default ReminderSlice.reducer