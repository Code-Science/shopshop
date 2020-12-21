export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      const newState = { ...state, basket: [...state.basket] };

      let similarItem = false;

      newState.basket.forEach((item) => {
        if (action.item.id === item.id) {
          item.quantity++;
          similarItem = true;
        }
      });

      if (similarItem) return newState;

      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    }
    case 'REMOVE_FROM_BASKET': {
      // find first index
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newBasket = [...state.basket];
      if (index >= 0 && state.basket[index].quantity === 1) {
        newBasket.splice(index, 1);
      } else if (index >= 0 && state.basket[index].quantity > 1) {
        newBasket[index].quantity--;
      } else {
        console.warn(
          `Cant remove Product { id : ${action.id}} as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    }
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
