import {
  API_LOADING,
  API_FAILURE,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURE_SUCCESS
} from '../actionTypes'
import axios from 'axios'

export function fetchPictures(url) {
  return function(dispatch) {
    dispatch({
      type: API_LOADING
    })
    axios.get(url)
      .then(({ data }) => {
        dispatch({
          type: FETCH_PICTURES_SUCCESS,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: API_FAILURE,
          payload: err.message
        })
      })
  }
}

export function fetchPicture(url) {
  return function(dispatch) {
    dispatch({
      type: API_LOADING
    })
    axios.get(url)
      .then(({ data }) => {
        dispatch({
          type: FETCH_PICTURE_SUCCESS,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: API_FAILURE,
          payload: err.message
        })
      })
  }
}