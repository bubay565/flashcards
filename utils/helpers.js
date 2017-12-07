import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'UdaciCards:deck'

let appData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is the main benefit of Redux?',
        answer: 'It makes state predictable thus enabling easy bug detection and fixing.'
      }
    ]
  }
}

export const getDecks = () => {
  return appData
}

export const getDeck = (deck) => {
  return appData.hasOwnProperty(deck) ? appData[deck] : 'null'
}

export const saveDeckTitle = (deck) => (
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck] : {
      title: deck,
      questions: []
    }
  }))
)

const addCardToDeck = (title, card) => {
  appData.title.questions.concat(card);
}

export const getDeckSummary = () => {
  let keys = Object.keys(appData);
  let res = {};
  keys.forEach((key) => {
     res[key] = appData[key].questions.length;
    });
  return res;
}
