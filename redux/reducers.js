const reducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(store => store.id !== action.payload.id);
  }
  return state;
};

export default reducers;
