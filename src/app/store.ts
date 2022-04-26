import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../pages/utilities-sections/filterSlice';

interface filterType {
  type: string;
  coOper: string;
  typeOpened: boolean;
}

export interface stateType {
  filters: filterType;
}

export default configureStore({
  reducer: {
    filters: filterReducer,
  },
});
