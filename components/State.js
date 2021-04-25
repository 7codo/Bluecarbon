import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  let sharedState = {/* whatever you want */}
    const [isMobileMenu, setMobileMenu] = useState(false);
    const openMobileMenu = () => {
        setMobileMenu(true)
    }
    const closeMobileMenu = () => {
        setMobileMenu(false)
    }
  return (
    <AppContext.Provider value={{
        isMobileMenu, openMobileMenu, closeMobileMenu
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}