import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'UdaciCards:deck'

let appData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        explanation: 'A library for managing user interfaces',
        answer: 'correct'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        explanation: 'The componentDidMount lifecycle event',
        answer: 'incorrect'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        explanation: 'The combination of a function and the lexical environment within which that function was declared.',
        answer: 'correct'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is the main benefit of Redux?',
        explanation: 'It makes state predictable thus enabling easy bug detection and fixing.',
        answer: 'incorrect'
      }
    ]
  },
  GraphQl: {
    title: 'Redux',
    questions: [
      {
        question: 'What is the main benefit of Redux?',
        explanation: 'It makes state predictable thus enabling easy bug detection and fixing.',
        answer: 'incorrect'
      }
    ]
  },
  VueJs: {
    title: 'Redux',
    questions: [
      {
        question: 'What is the main benefit of Redux?',
        explanation: 'It makes state predictable thus enabling easy bug detection and fixing.',
        answer: 'incorrect'
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

export const addCardToDeck = (title, card) => {
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
