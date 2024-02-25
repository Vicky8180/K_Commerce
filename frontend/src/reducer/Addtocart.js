

const initialState = [];

const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case "addtocart":
      const newItem = action.payload;

      const isItemExist = state.some(item => item.id === newItem.id);
      if (!isItemExist) {
        return [...state, newItem];
      }
console.log(state)
      return state;

    default:
      return state;
  }
};

export default addToCart;
