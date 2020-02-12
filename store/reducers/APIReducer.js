import {
  API_FAILURE,
  API_LOADING,
  CLEAR_API_ERROR,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
  FETCH_PICTURE_SUCCESS,
  FETCH_PICTURE_FAILURE,
} from '../actionTypes'

const initialState = {
  url: 'https://api.nasa.gov/planetary/apod?api_key=JhP6oQM9WqrQ772Zlu007ThAa2N9gpowfl09F6Uo',
  pictures: [],
  picture: {},
  error: null,
  isLoading: false,
  success: null
}

export default function APIReducer(state = initialState, action) {
  switch(action.type) {
    case API_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case API_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case CLEAR_API_ERROR:
      return {
        ...state,
        error: null
      }
    case FETCH_PICTURES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pictures: action.payload
      }
    case FETCH_PICTURES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case FETCH_PICTURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        picture: action.payload
      }
    case FETCH_PICTURE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}