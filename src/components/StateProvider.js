import React, { createContext, useContext, useReducer } from "react";

// prepare the dataLayer
export const StateContext = createContext();

// wrap the app and provide the Data layer
export const StateProvider = ({ useReducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);