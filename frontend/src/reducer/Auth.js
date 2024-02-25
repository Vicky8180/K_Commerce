const initialState = false;

const  auth = (state = initialState, action) => {
  switch (action.type) {
    case "auth":
      const data = action.payload;
      console.log(data);
      return data;
    default:
      return state;
  }
};

export default auth;
