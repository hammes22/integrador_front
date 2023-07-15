import { GlobalContext } from "./globalContext";
import useAuth from "../hook/useAuth";

export const GlobalStateProvider = ({ children }) => {
  const auth = useAuth();
  

  const context = {
    auth,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};
