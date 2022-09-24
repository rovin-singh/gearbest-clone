import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
} from "./action.type";

export const getCartData = () => (dispatch) => {
  // Loading
  dispatch({ type: GET_CART_ITEMS_LOADING });
  // success
 return axios
    .get(`http://localhost:8000/cart`)
    .then((res) => {
      dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_CART_ITEMS_ERROR });
    });
};

export const addingInCart = (data) => (dispatch) => {
  // Loading
  console.log("data",data)
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  // success
  try{
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  }
  catch(err){
    dispatch({ type: ADD_ITEM_TO_CART_ERROR });
  }   
   
};
