const initialState = [];

const  userData = (state = initialState, action) => {
  switch (action.type) {
    case "userdata":
      const data = action.payload;
      console.log(data);
      return data;
    default:
      return state;
  }
};

export default userData;
