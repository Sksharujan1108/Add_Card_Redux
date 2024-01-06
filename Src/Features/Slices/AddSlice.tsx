import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Dammy_Data/fakeData";
import { RootState } from "../Store";
import ICheckOutState from "../../Module/Add_Module";

const DEFAULT_STATE: ICheckOutState = {
  cart: storeData,
};

const INITIAL_STATE: ICheckOutState = {
  ...DEFAULT_STATE,
};

const AddSlice = createSlice({
  name: "menu",
  initialState: INITIAL_STATE,
  reducers: {
    resetCheckOutSlice: () => {
      // clearAccessToken();
      return DEFAULT_STATE;
    },

    ///add to cart
    addToCart: (
      state: ICheckOutState,
      action: PayloadAction<any | undefined>
    ) => {
      if (action.payload) {
        const isAdded =
          state.cart.filter((item: any) => item.id === action.payload.id)
            .length > 0;
        if (isAdded) {
          return {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return { ...state, cart: [...state.cart, action.payload] };
        }
      }
      return state; // If no payload is provided, return the current state
    },
    //increase quantity

    incrementItem: (state: ICheckOutState, action: PayloadAction<any>) => {
      const index = state.cart.findIndex(
        (item: any) => item.id === action.payload
      );
      if (index >= 0) {
        state.cart[index].quantity += 1;
      }
    },
  },
});

export const { addToCart, incrementItem, resetCheckOutSlice } =
  AddSlice.actions;

export const AddCart = (state: RootState) => state.menu.cart;

export const TotalOder = (state: RootState) => state.menu;

export default AddSlice;
