
import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { text: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    newFilter: {
      reducer(state, action) {
        return { text: action.payload };
      },
    },
  },
});

export const { newFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;