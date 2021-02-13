import React, { createContext, useContext, useReducer } from "react";

// PREPARING THE DATA LAYER

export const StateContext = createContext();

// WRAPPING THE APP PROVIDING DATA LAYER

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
