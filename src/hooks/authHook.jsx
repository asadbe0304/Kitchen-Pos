import { useContext } from "react";
import { AuthRegister } from "../context/Auth";
export const useAuth = () => {
  return useContext(AuthRegister);
};
