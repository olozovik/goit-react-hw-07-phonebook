import { createSlice } from '@reduxjs/toolkit';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { changeFilter } = phonebookSlice.actions;
