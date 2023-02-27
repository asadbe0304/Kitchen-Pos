import { faker } from "@faker-js/faker";
import { createContext, useReducer, useContext, useEffect } from "react";
import { reducers, sumOrder } from "./reducer";
const orderContext = createContext({});

const storage = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
  : [];

const product = [...Array(30)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  category: faker.commerce.department(),
  price: faker.commerce.price(1, 30),
  image: faker.image.food(),
}));

const initialState = {
  product: product,
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
