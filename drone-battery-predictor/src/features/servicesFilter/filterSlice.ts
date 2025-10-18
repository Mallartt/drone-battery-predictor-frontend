/* src/features/servicesFilter/filterSlice.ts */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  name: string;
  date_from?: string | null;
  date_to?: string | null;
}

const initialState: FilterState = {
  name: "",
  date_from: null,
  date_to: null,
};

const filterSlice = createSlice({
  name: "servicesFilter",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setDateFrom(state, action: PayloadAction<string | null>) {
      state.date_from = action.payload;
    },
    setDateTo(state, action: PayloadAction<string | null>) {
      state.date_to = action.payload;
    },
    resetFilter() {
      return initialState;
    },
  },
});

export const { setName, setDateFrom, setDateTo, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;

