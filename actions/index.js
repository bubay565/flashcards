import * as API from '../utils/helpers'
import {
  SET_INITIAL_APP_DATA,
  FETCH_DECK_SUMMARY,
  FETCH_DECK_DETAILS
} from './actionTypes'

export function initialiseAppData() {
  return dispatch => {
    return API.initialiseAppData()
    .then(res => {
      dispatch({
        type: SET_INITIAL_APP_DATA
      })
    })
  }
}

export function getDeckSummary(){
  return dispatch => {
    return API.getDeckSummary()
    .then(res => {
      return dispatch({
        type: FETCH_DECK_SUMMARY,
        deckSummary: res
      })
    })
  }
}

export function getDeck(deck){
  return dispatch => {
    API.getDeck(deck)
    .then(res => {
      return dispatch({
        type: FETCH_DECK_DETAILS,
        deck: res
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }
}
