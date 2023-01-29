import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAddThreadModal: false,
};

const uiSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    openAddThreadModal(state) {
      const latestState = { ...state };
      latestState.showAddThreadModal = true;
      return latestState;
    },
    closeModal() {
      return {
        showAddThreadModal: false,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
