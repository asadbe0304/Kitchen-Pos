import { useContext } from "react";
// import { OrderProvider } from "./../context/context";
import {OrderContext} from "./../context/context"

export const useOrder = () => {
  return useContext(OrderContext);
};
