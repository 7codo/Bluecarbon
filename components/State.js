import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {

    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isProfileOverview, setProfileOverview] = useState(false);

    const openMobileMenu = () => {
        setMobileMenu(true)
    }
    const closeMobileMenu = () => {
        setMobileMenu(false)
    }

    const openProfileOverview = () => {
      setProfileOverview(true)
    }

    const closeProfileOverview = () => {
      setProfileOverview(false)
    }

  return (
    <AppContext.Provider value={{
        isMobileMenu, openMobileMenu, closeMobileMenu, isProfileOverview, openProfileOverview, closeProfileOverview
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}