const StorageOrder = (order) => {
  localStorage.setItem("order", JSON.stringify(order.length > 0 ? order : []));
};
export const sumOrder = (order) => {
  StorageOrder(order);

  let orderCount = order.reduce(
    (totals, product) => totals + product.quantity,
    0
  );
  let totals = order
  .reduce((totals, product) => totals + product.price * product.quantity, 0)
  .toFixed(2);
  return { orderCount, totals };
};
export const reducers = (state, action) => {
  switch (action.type) {
    case "ADD__ORDER":
      if (!state.order.find((e) => e.id === action.payload.id)) {
        state.order.push({ ...action.payload, quantity: 1 });
        // state.order[state.order.findIndex((e) => e.id === action.payload.id)]
          // .quantity++;
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
