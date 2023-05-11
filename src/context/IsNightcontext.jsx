import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

export const IsNightContext = createContext();

export const IsNightProvider = ({ children }) => {
  const [isNight, setIsNight] = useLocalStorage("isni", false);

  return (
    <IsNightContext.Provider value={{ isNight, setIsNight }}>
      {children}
    </IsNightContext.Provider>
  );
};
