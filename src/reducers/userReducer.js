const initialState = {
    user: null,
    authToken: null,
    url: "http://localhost:8080",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'SET_AUTH_TOKEN':
        return {
          ...state,
          authToken: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          authToken: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  