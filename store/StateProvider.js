import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  reducer: PropTypes.func,
  initialState: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};
