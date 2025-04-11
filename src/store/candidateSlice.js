import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.list.push(action.payload);
    },
    clearCandidates: (state) => {
      state.list = [];
    },
  },
});

export const { addCandidate, clearCandidates } = candidateSlice.actions;
export default candidateSlice.reducer;
