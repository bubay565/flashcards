import {
  SET_INITIAL_APP_DATA,
  FETCH_ALL_DECKS,
  FETCH_DECK_DETAILS,
  NEW_DECK_ADDED,
  ADD_CARD_TO_DECK
} from '../actions/actionTypes'

const initialState = {
  appReady: false,
  deckReady: false,
  allDecks: {},
  deck: {},
  hasError: false,
  errorMessage: null
}

export default function CardReducer(state = initialState, action){
  switch(action.type){
    case SET_INITIAL_APP_DATA:
      return state

    case FETCH_ALL_DECKS:
      return {
        ...state,
        appReady: true,
        deckReady: true,
        allDecks: action.res
      }

    case FETCH_DECK_DETAILS:
      return {
        ...state,
        deckReady: true,
        deck: action.res
      }

    case NEW_DECK_ADDED:
      return {
        ...state,
        allDecks: action.res
      }

    case ADD_CARD_TO_DECK:
      return {
        ...state,
        allDecks: action.res
      }

    default:
      return state
  }
}
