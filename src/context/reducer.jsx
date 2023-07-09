const StorageOrder = (order) => {
  localStorage.setItem("order", JSON.stringify(order.length > 0 ? order : []));
};
export const sumOrder = (order) => {
  StorageOrder(order);

  let ordercount = order.reduce((totals, order) => totals + order.quantity, 0);
  let ordertotal = order
    .reduce((totals, order) => totals + order.price * order.quantity, 0)
    .toFixed(2);
  let orderCount = localStorage.setItem("Count", ordercount);
  let totals = localStorage.setItem("totals", ordertotal);
  return { ordercount, totals };
};
export const reducers = (state, action) => {
  switch (action.type) {
    case "ADD__ORDER":
      if (!state.order.find((e) => e.id === action.payload.id)) {
        state.order.push({ ...action.payload, quantity: 1 });
      } else {
        state.order[state.order.findIndex((e) => e.id === action.payload.id)]
          .quantity++;
      }
      return {
        ...state,
        ...sumOrder(state.order),
        order: [...state.order],
      };
    case "REMOVE__ORDER":
      return {
        ...state,
        ...sumOrder(state.order.filter((e) => e.id !== action.payload.id)),
        order: [...state.order.filter((e) => e.id !== action.payload.id)],
      };
    case "INCREASE":
      state.order[state.order.findIndex((e) => e.id === action.payload.id)]
        .quantity++;

      return {
        ...state,
        ...sumOrder(state.order),
        order: [...state.order],
      };
    case "INCREASEADD":
      state.order[state.order.findIndex((e) => e.id === action.payload.id)]
        .quantity++;
      return {
        ...state,
        ...sumOrder(state.order),
        order: [...state.order],
      };
    case "CLEAR":
      return {
        ...state,
        order: [],
      };
    // case "TRANSFER":
    //   return {
    //     ...state,
    //     tranferData: [state.order],
    //   };
    case "DECREASE":
      state.order[state.order.findIndex((e) => e.id === action.payload.id)]
        .quantity--;
      return {
        ...state,
        ...sumOrder(state.order),
        order: [...state.order],
      };
    case "ORDER__CART":
      return {
        ...state,
        orderOpen: action.payload,
      };
    case "PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
  
    default:
      return state;
  }
};
