import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    type: 'utilityType_label',
    coOper: 'coOper_label',
    typeOpened: false,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCoOper: (state, action) => {
      state.coOper = action.payload;
    },
    setTypeOpened: (state, action) => {
      state.typeOpened = action.payload;
    },
    removeAll: (state) => {
      state.type = '';
      state.coOper = '';
      state.typeOpened = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setType, setCoOper, setTypeOpened, removeAll } =
  filterSlice.actions;

export default filterSlice.reducer;
