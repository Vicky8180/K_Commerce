const initialState = [];

const productArray = (state = initialState, action) => {
  switch (action.type) {
    case "productarray":
      const data = action.payload;
      return [...data];
    default:
      return state;
  }
};

export default productArray;
