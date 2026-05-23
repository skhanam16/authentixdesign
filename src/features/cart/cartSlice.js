import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () =>{
  return JSON.parse(localStorage.getItem('cart')) || defaultState;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem:(state, action) =>{
    // console.log(action.payload);
    // grab the product from action.payload
    //get cartID from product object
    const {product} = action.payload;
    // console.log(product);
    const item = state.cartItems.find((i) =>i.cartID ===product.cartID);
    if(item){
      item.amount +=product.amount;
    }
    else{
      state.cartItems.push(product);
    }
    state.numItemsInCart +=product.amount;
    state.cartTotal +=product.price * product.amount;
    // state.tax =0.5 *  state.cartTotal;
    // state.orderTotal = state.cartTotal + state.shipping + state.tax;
    // localStorage.setItem('cart', JSON.stringify(state));
    cartSlice.caseReducers.calculateTotals(state);
    toast.success("Item added to cart");
    },
    clearCart: (state) =>{
      localStorage.setItem('cart',JSON.stringify(defaultState));
      return defaultState
    },
    removeItem: (state, action) =>{
      const {cartID} = action.payload;
      const product= state.cartItems.find((i) => i.cartID ===cartID);
      // console.log(product);
     state.cartItems = state.cartItems.filter((i) =>i.cartID !==cartID);
      state.numItemsInCart -=product.amount;
    state.cartTotal -=product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
    toast.error("Item removed from cart");
      
    },
    editItem: (state, action) =>{
      const {cartID, amount} = action.payload;
       const item = state.cartItems.find((i) =>i.cartID ===cartID);
       if(item){
        item.amount = amount;
       }
        cartSlice.caseReducers.calculateTotals(state);
    toast.success("Cart updated");
    },
    calculateTotals: (state) =>{
      state.tax =state.cartTotal * 0.05;
    state.orderTotal = state.cartTotal + state.shipping + state.tax;
    localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const {addItem, clearCart, removeItem, editItem} =cartSlice.actions;
export default cartSlice.reducer;