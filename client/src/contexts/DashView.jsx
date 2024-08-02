/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import { createContext, useState, useContext } from "react";

const dashView = createContext()

export const DashViewProvider = ({ children }) => {
    const [dashItem, setDashItem] = useState("");
  
    return (
      <dashView.Provider value={{ dashItem, setDashItem }}>
        {children}
      </dashView.Provider>
    );
  };
  
  // eslint-disable-next-line react-refresh/only-export-components
  export const useDashView = () => {
    return useContext(dashView);
  };