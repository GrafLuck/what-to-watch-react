import { configureStore } from '@reduxjs/toolkit';
import interfaceReducer from './features/interface/interface-slice';
import filterReducer from './features/filter/filter-slice';

export const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
