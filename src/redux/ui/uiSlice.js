import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: true,
};

const uiSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    openModal(state) {
      const latestState = { ...state };
      latestState.showModal = true;
      return latestState;
    },
    closeModal(state) {
      const latestState = { ...state };
      latestState.showModal = false;
      return latestState;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
