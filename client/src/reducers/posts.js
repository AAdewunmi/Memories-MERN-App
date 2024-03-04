import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from "../constants/actionTypes";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
      case START_LOADING: 
        return {...state, isLoading: true};
      
      case FETCH_ALL:
        return {
          ...state,
          posts: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case FETCH_BY_SEARCH:
        return {...state, posts: action.payload};
      case CREATE:
        return [...state, action.payload];
      case UPDATE:
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      case DELETE:
        return state.filter((post) => post._id !== action.payload);
      default:
        return state;
    }
}
