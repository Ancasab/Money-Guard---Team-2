import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsdEuroValues } from "./currencyApi";
import { setDataToLocalStorage, getCurrencyDataFromLocalStorage } from "./currencyApiHelpers";

// Thunk pentru a prelua datele valutare
export const getCurrency = createAsyncThunk("currency/fetch", async (_, thunkAPI) => {
  try {
    const storedData = getCurrencyDataFromLocalStorage();
    if (storedData) return storedData; // Folosește datele cache-uite dacă sunt valide

    const data = await fetchUsdEuroValues();
    setDataToLocalStorage(data); // Cachează datele noi
    return data.rates;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Slice pentru gestionarea stării valutare
const currencySlice = createSlice({
  name: "currency",
  initialState: {
    data: null,
    isCurrencyLoading: false,
    isCurrencyError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrency.pending, (state) => {
        state.isCurrencyLoading = true;
        state.isCurrencyError = null;
      })
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.isCurrencyLoading = false;
        state.data = action.payload;
      })
      .addCase(getCurrency.rejected, (state, action) => {
        state.isCurrencyLoading = false;
        state.isCurrencyError = action.payload;
      });
  },
});

export const selectCurrencyData = (state) => state.currency.data;
export const selectCurrencyLoading = (state) => state.currency.isCurrencyLoading;
export const selectCurrencyError = (state) => state.currency.isCurrencyError;

export default currencySlice.reducer;
