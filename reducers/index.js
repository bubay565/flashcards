import {
  SET_INITIAL_APP_DATA,
  FETCH_DECK_SUMMARY,
  FETCH_DECK_DETAILS
} from '../actions/actionTypes'

const initialState = {
  isReady: false,
  deckReady: false,
  deckSummary: {},
  deck: {},
  hasError: false,
  errorMessage: null
}

export default function CardReducer(state = initialState, action){
  switch(action.type){
    case SET_INITIAL_APP_DATA:
      return state

    case FETCH_DECK_SUMMARY:
      return {
        ...state,
        isReady: true,
        deckSummary: action.deckSummary
      }
    case FETCH_DECK_DETAILS:
      return {
        ...state,
        deckReady: true,
        deck: action.deck
      }
    default:
      return state
  }
}
