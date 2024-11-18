import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [renting, setRenting] = useState(false);

  const values = { renting, setRenting };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
