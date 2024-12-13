// authSlice.js
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  getBalanceThunk,
} from '../../redux/Auth/operations';
import {
  addTransactions,
  deleteTransactions,
  editTransactions,
} from '../../redux/Transactions/operations';

const initialState = {
  user: {
    name: null,
    email: null,
    balance: 0, // Inițializează balanța cu 0
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  isAuthError: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateBalance: (state, action) => {
      state.user.balance = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
        state.isAuthLoading = true;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
        state.isAuthLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.username;
        state.user.email = payload.email;
        state.user.balance = payload.balance;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoading = false;
      })
      .addCase(getBalanceThunk.fulfilled, (state, { payload }) => {
        state.user.balance = payload;
      })
      .addCase(addTransactions.fulfilled, (state, { payload }) => {
        const transactionAmount = payload.sum;
        if (payload.type === 'income') {
          state.user.balance += transactionAmount;
        }
        if (payload.type === 'expense') {
          state.user.balance -= transactionAmount;
        }
      })
      .addCase(deleteTransactions.fulfilled, (state, { payload }) => {
        const transactionAmount = payload.sum;
        if (payload.type === 'income') {
          state.user.balance -= transactionAmount;
        }
        if (payload.type === 'expense') {
          state.user.balance += transactionAmount;
        }
      })
      .addCase(editTransactions.fulfilled, (state, { payload }) => {
        const { oldTransaction, newTransaction } = payload;

        // Ajustează balanța scăzând suma tranzacției vechi și adăugând suma noii tranzacții
        // if (oldTransaction.type === 'income') {
        //     state.user.balance -= oldTransaction.sum;
        // } else if (oldTransaction.type === 'expense') {
        //     state.user.balance += oldTransaction.sum;
        // }

        // if (newTransaction.type === 'income') {
        //     state.user.balance += newTransaction.sum;
        // } else if (newTransaction.type === 'expense') {
        //     state.user.balance -= newTransaction.sum;
        // }
        if (oldTransaction && oldTransaction.type) {
          // Ajustează balanța pentru tranzacția veche
          if (oldTransaction.type === 'income') {
            state.user.balance -= oldTransaction.sum;
          } else if (oldTransaction.type === 'expense') {
            state.user.balance += oldTransaction.sum;
          }
        }

        if (newTransaction && newTransaction.type) {
          // Ajustează balanța pentru tranzacția nouă
          if (newTransaction.type === 'income') {
            state.user.balance += newTransaction.sum;
          } else if (newTransaction.type === 'expense') {
            state.user.balance -= newTransaction.sum;
          }
        }
      })
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.username;
          state.user.email = payload.user.email;
          state.user.balance = payload.user.balance;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isAuthLoading = false;
          state.isAuthError = null;
        }
      )
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), state => {
        state.isAuthLoading = true;
        state.isAuthError = null;
      })
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        (state, { payload }) => {
          state.isAuthLoading = false;
          state.isAuthError = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
export const { updateBalance } = slice.actions;
export const selectBalance = state => state.auth.user.balance; // Selector pentru balanță
