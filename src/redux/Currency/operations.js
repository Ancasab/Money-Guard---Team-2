import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsdEuroValues } from './currencyApi';
import { setDataToLocalStorage, getCurrencyDataFromLocalStorage } from '../../helpers/currencyApiHelpers';

export const getCurrency = createAsyncThunk('currency', async (_, thunkAPI) => {
  try {
    const storedData = getCurrencyDataFromLocalStorage();
    if (storedData) return storedData; // Folosește datele cache-uite dacă sunt valide
    const data = await fetchUsdEuroValues();
    setDataToLocalStorage(data); // Cachează datele noi
    if (!data || !data.rates || !data.rates.EUR) {
        throw new Error("Invalid currency data");
      } return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
