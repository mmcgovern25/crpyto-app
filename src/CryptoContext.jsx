import React, { useState } from 'react'
import { createContext } from 'react';;
import { useContext } from 'react';

const Cryto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€")
  }, [currency])

  return (
    <Crypto.Provider value={{currency, symbol, setCurrency}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto);
}
