import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ItemState } from '../../../interfaces/Item';

const initialState: ItemState = {
  items: [],
};

export const ItemSlice = createSlice({
  name: 'Code Black',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string }>) => {
      state.items.push({
        id: state.items.length,
        name: action.payload.name,
      });
    },
  },
});

export default ItemSlice.reducer;
export const { addItem } = ItemSlice.actions;
