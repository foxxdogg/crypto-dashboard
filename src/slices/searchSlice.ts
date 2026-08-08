import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetQuery: (state) => {
      state.query = '';
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { resetQuery, setQuery } = searchSlice.actions;
export default searchSlice.reducer;
