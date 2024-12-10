export const setDataToLocalStorage = (data) => {
    const filteredData = {
      timestamp: Date.now(),
      rates: {
        USD: 1, // USD este implicit baza
        EUR: data.rates.EUR,
      },
    };
    localStorage.setItem("lastCurrencyDate", JSON.stringify(filteredData));
  };
  
  export const getCurrencyDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("lastCurrencyDate");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const now = Date.now();
      const oneHourStep = 3600000; // 1 oră în milisecunde
      if (now - parsedData.timestamp < oneHourStep) {
        return parsedData.rates; // Returnează doar ratele
      }
    }
    return null; // Dacă datele sunt expirate sau absente
  };
  