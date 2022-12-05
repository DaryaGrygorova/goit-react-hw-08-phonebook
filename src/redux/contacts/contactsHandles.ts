import { ContactStateType } from "types/types";

export const pending = (state: ContactStateType) => {
  state.isLoading = true;
};

export const fulfilled = (state: ContactStateType) => {
  state.isLoading = false;
  state.error = null;
};

export const rejected = (state: ContactStateType, action: any) => {
  state.items = [];
  state.isLoading = false;
  state.error = action.payload;
};

export const fetchItems = (state: ContactStateType, action: any) => {
  state.items = action.payload;
};

export const addItem = (state: ContactStateType, action: any) => {
  state.items.push(action.payload);
};

export const deleteItem = (state: ContactStateType, action: any) => {
  const idx = state.items.findIndex(item => item.id === action.payload);
  if (idx >= 0) {
  state.items.splice(idx, 1);
  };
};

