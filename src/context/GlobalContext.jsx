import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState({
    category: "",
    description: "",
    id: 0,
    image: "",
    title: "",
  });

  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ cardInfo, setCardInfo, isModalActive, setIsModalActive }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
