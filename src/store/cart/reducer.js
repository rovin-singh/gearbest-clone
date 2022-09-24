import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
} from "./action.type";

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
    data: [],
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART_LOADING: {
      return {
        ...state,
        addCartItem: {
          ...state.addCartItem,
          loading: true,
        },
      };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        addCartItem: {
          ...state.addCartItem,
          loading: false,
          error: false,
        },
        data:[...state.data,payload]
      };
    }
    case ADD_ITEM_TO_CART_ERROR: {
      return {
        ...state,
        addCartItem: {
          ...state.addCartItem,
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
