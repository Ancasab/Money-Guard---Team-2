import { createAsyncThunk } from '@reduxjs/toolkit';
import { userTransactionsApi } from '../../config/userTransactionApi';
// import { getBalanceThunk } from '../Auth/operations';

// export const getTransactions = createAsyncThunk(
//   'transactions/getTransactions',
//   async (_, thunkApi) => {
//     try {
//       const { data } = await userTransactionsApi.get('/transactions');

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const addTransactions = createAsyncThunk(
//   'transactions/add',
//   async (transaction, thunkApi) => {
//     try {
//       const { data } = await userTransactionsApi.post(
//         '/transactions',
//         transaction
//       );
//       thunkApi.dispatch(getBalanceThunk());
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteTransactions = createAsyncThunk(
//   'transactions/delete',
//   async (id, thunkApi) => {
//     try {
//       await userTransactionsApi.delete(`/transactions/${id}`);
//       return id;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const editTransactions = createAsyncThunk(
//   'transactions/edit',
//   async ({ id, transaction }, thunkApi) => {
//     try {
//       const { data } = await userTransactionsApi.patch(
//         `/transactions/${id}`,
//         transaction
//       );
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// Stare fallback în caz de eroare API
const fallbackTransactions = [
  {
    id: '1',
    date: '04.01.23',
    type: '-',
    category: 'Other',
    comment: 'Gift for your wife',
    sum: 300.0,
  },
  {
    id: '2',
    date: '05.01.23',
    type: '+',
    category: 'Income',
    comment: 'January bonus',
    sum: 8000.0,
  },
  {
    id: '3',
    date: '07.01.23',
    type: '-',
    category: 'Car',
    comment: 'Oil',
    sum: 1000.0,
  },
  {
    id: '4',
    date: '07.01.23',
    type: '-',
    category: 'Products',
    comment: 'Vegetables for the week',
    sum: 280.0,
  },
  {
    id: '5',
    date: '07.01.23',
    type: '+',
    category: 'Income',
    comment: 'Gift ',
    sum: 1000.0,
  },
];

// Operațiuni pentru gestionarea tranzacțiilor
export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, thunkApi) => {
    try {
      const { data } = await userTransactionsApi.get('/transactions');
      if (data && Array.isArray(data)) {
        return data;
      }
      // Dacă API-ul nu returnează date valide, folosim fallback-ul
      return fallbackTransactions;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return thunkApi.rejectWithValue(fallbackTransactions);
    }
  }
);

export const addTransactions = createAsyncThunk(
  'transactions/add',
  async (transaction, thunkApi) => {
    try {
      const { data } = await userTransactionsApi.post(
        '/transactions',
        transaction
      );
      return data;
    } catch (error) {
      console.error('Error adding transaction:', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactions = createAsyncThunk(
  'transactions/delete',
  async (id, thunkApi) => {
    try {
      await userTransactionsApi.delete(`/transactions/${id}`);
      return id;
    } catch (error) {
      console.error('Error deleting transaction:', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editTransactions = createAsyncThunk(
  'transactions/edit',
  async ({ id, transaction }, thunkApi) => {
    try {
      const { data } = await userTransactionsApi.patch(
        `/transactions/${id}`,
        transaction
      );
      return data;
    } catch (error) {
      console.error('Error editing transaction:', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
