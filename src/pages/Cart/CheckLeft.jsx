import { useOrder } from "../../context/context";
const CheckLeft = () => {
  const {
    state: { order },
    dispatch,
  } = useOrder();

  return (
    <>
      <div
        className="overflow-y-scroll checkout-left px-1 py-1 mt- w-1/2"
        style={{ height: "400px" }}
      >
        {order.length > 0
          ? order.map((e) => {
              return (
                <div
                  style={{ background: "var(--order)" }}
                  key={e.id}
                  className="flex items-center border rounded-md w-full justify-between my-1 p-2 flex-auto"
                >
                  <img
                    src={e.images}
                    alt="images"
                    className="rounded-full"
                    width={80}
                    height={80}
                  />
                  <p className="my-4 nav-title text-lg leading-relaxed">
                    {e.name}
                  </p>
                  <p className="flex gap-2 mx-2 m-0 p-0 nav-title items-center font-medium justify-between">
                    x{e.quantity}
                    <span className="nav-title font-medium">
                      ${(e.price * e.quantity).toFixed(1)}
                    </span>
                  </p>
                </div>
              );
            })
          : "Not order"}
      </div>
    </>
  );
};

export default CheckLeft;
