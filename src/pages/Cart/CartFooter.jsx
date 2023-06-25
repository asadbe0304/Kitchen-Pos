import { useOrder } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const CartFooter = () => {
  const {
    state: { order },
    dispatch,
  } = useOrder();

  const [difference, setDifference] = useState();
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Wow Success!"),
      {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      };
    setDifference("");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    setTimeout(() => {
      dispatch({ type: "ORDER__CART" });
      dispatch({ type: "TRANSFER" });
      dispatch({ type: "CLEAR" });
      localStorage.removeItem("totals");
      localStorage.removeItem("order");
    }, 1150);
  };
  return (
    <>
      <div className="flex items-center cart-page justify-between py-6 px-2 border-t border-solid border-slate-200 rounded-b">
        <button
          className="nav-title bg-orange-400 font-bold uppercase px-4 rounded-md py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => navigate("/home")}
        >
          Cancel
        </button>
        <button
          disabled={difference === 0}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={notify}
        >
          Placing an order
        </button>
      </div>
    </>
  );
};

export default CartFooter;
