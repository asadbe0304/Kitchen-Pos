import { useContext } from "react";
// import { OrderProvider } from "./../context/context";

export const useOrder = () => {
  return useContext(orderContext);
};
