import axios from "axios";

// Creează o instanță axios pentru a gestiona cererile API
export const userTransactionsApi = axios.create({
  baseURL: "https://wallet.b.goit.study",  // Setează base URL doar o dată
});

// Funcție pentru setarea tokenului în antetul de autorizare
export const setToken = (token) => {
  userTransactionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Funcție pentru a elimina tokenul din antetul de autorizare
export const removeToken = () => {
  delete userTransactionsApi.defaults.headers.common.Authorization;
};
