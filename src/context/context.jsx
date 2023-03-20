
import { createContext, useReducer, useContext, useEffect } from "react";
import { reducers, sumOrder } from "./reducer";
import { data } from "./../db/db";
const orderContext = createContext({});

const storage = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
  : [];

const initialState = {
  product: data,
  orderOpen: false,
  profile: false,
  order: storage,
  ...sumOrder,
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <orderContext.Provider value={{ state, dispatch }}>
      {children}
    </orderContext.Provider>
  );
};

export default orderContext;

export const useOrder = () => {
  return useContext(orderContext);
};
