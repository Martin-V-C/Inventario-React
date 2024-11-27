import React, { createContext, useState } from "react";
import useApi from "../../hooks/useAPI";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const { get } = useApi();

  const fetchUserData = async (noEco) => {
    const data = await get("http://127.0.0.1:8080/api/depositarios/" + noEco);
    setUserData(data);
  };

  return (
    <UserDataContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
