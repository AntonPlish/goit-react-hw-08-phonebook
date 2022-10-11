import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { text: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    contactsFilter: {
      reducer(_, action) {
        console.log(action.payload)
        return { text: action.payload };
      },
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;