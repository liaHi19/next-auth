import { createContext, useContext, useState } from "react";

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);

  const showLogin = () => {
    setIsLogin(true);
  };

  const handleAuth = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <DialogContext.Provider
      value={{
        isLogin,
        showLogin,
        handleAuth,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);

export default DialogContext;
