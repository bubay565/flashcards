import * as API from '../utils/helpers'
import {
  SET_INITIAL_APP_DATA,
  FETCH_ALL_DECKS,
  FETCH_DECK_DETAILS,
  NEW_DECK_ADDED
} from './actionTypes'

export function initialiseAppData() {
  return dispatch => {
    return API.initialiseAppData()
    .then(res => {
      dispatch({
        type: SET_INITIAL_APP_DATA
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function getDecks(){
  return dispatch => {
    return API.getDecks()
    .then(res => {
      return dispatch({
        type: FETCH_ALL_DECKS,
        res
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function getDeck(deck){
  return dispatch => {
    API.getDeck(deck)
    .then(res => {
      return dispatch({
        type: FETCH_DECK_DETAILS,
        res
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }
}

export function addNewDeck(title){
  return dispatch => {
    API.createNewDeck(title)
    .then(res => {
      return dispatch({
        type: NEW_DECK_ADDED,
        res
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }
}
