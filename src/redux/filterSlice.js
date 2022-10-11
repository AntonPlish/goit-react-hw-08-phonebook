import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { text: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    contactsFilter: {
      reducer(action) {
        return { text: action.payload };
      },
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;