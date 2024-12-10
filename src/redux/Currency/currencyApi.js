import axios from "axios";

const API_BASE_URL = "https://openexchangerates.org/api";
const APP_ID = "a7a7a14854b446acbe51757c094afd79";

// Instanța axios pentru cererile către API
export const currencyApi = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor pentru a adăuga header-ele comune
currencyApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obține token-ul din localStorage
    config.headers = {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : undefined,
      Accept: "application/json", // Adaugă header-ul accept
    };
    console.log(`token is`, token)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Funcție pentru preluarea datelor USD și EUR
export const fetchUsdEuroValues = async () => {
  try {
    const response = await currencyApi.get(`/latest.json`, {
      params: { app_id: APP_ID },
    });

    // Validare structură date
    if (!response.data || !response.data.rates || !response.data.rates.EUR) {
      throw new Error("Invalid data structure from API");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
