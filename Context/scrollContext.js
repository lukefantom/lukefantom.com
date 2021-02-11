//React
import { useContext, createContext, useState } from "react";

const ScrollContext = createContext(true);

export function ScrollProvider({ children }) {
  const [scroll, setScroll] = useState(true);

  return (
    <ScrollContext.Provider value={[scroll, setScroll]}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}
