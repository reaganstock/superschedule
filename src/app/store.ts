import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import goalReducer from '../features/goalSlice';
import scheduleReducer from '../features/scheduleSlice';
import aiReducer from '../features/aiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    schedule: scheduleReducer,
    ai: aiReducer,
  },
});

// No changes needed here