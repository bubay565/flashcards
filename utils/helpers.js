import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'deck'

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

export const initialiseAppData = () => {
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(appData));
    console.log('done initialising data storage..');
}

export const getDecks = () => {
  //AsyncStorage.getIt
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
  AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((result) => {
    const data = JSON.parse(result);
    let keys = Object.keys(data);
    let res = {};
    keys.forEach((key) => {
       res[key] = data[key].questions.length;
     })
     console.log('res: ', res)
    return res;
  })
}
