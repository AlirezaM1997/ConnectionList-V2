import { useState, useContext, createContext } from "react";
import { IThemeContext } from "../features/interfaces/interface";
const defaultState = {
  mode: "light",
  setMode: () => {
    throw new Error("context out of range");
  },
  lang: "fa",
  setLang: () => {
    throw new Error("context out of range");
  },
};

const Context = createContext<IThemeContext>(defaultState);
const Provider = ({ children }: any) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"fa" | "en">("fa");
  return (
    <Context.Provider
      value={{
        mode,
        setMode,
        lang,
        setLang,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
export function useMyContext() {
  return useContext(Context);
}
