import { ItemAction } from '../../interfaces/ItemAction';

const itemReducer = (state = [], action: ItemAction) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return [...state, { name: action.name }]; // state is immutable
    default:
      state;
  }
};

export default itemReducer;
