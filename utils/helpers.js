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
  GraphQL: {
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

export const initialiseAppData = async () => {
    await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(appData));
    console.log('done initialising data storage..');
}

export const getDecks = async () => (
   JSON.parse( await AsyncStorage.getItem(DECK_STORAGE_KEY))
)

export const getDeck = async (deck) => {
  const data = JSON.parse( await AsyncStorage.getItem(DECK_STORAGE_KEY));
  return data.hasOwnProperty(deck) ? data[deck] : 'null'
}

export const createNewDeck = async (title) => {
  await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title] : {
      title,
      questions: []
    }
  }))
  return JSON.parse( await AsyncStorage.getItem(DECK_STORAGE_KEY))
}

export const addCardToDeck = async (title, card) => {
  const deck = await getDeck(title);
  deck.questions.push(card);
  await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: deck
  }))
  const updated = await getDecks()
  return updated
}

export const getDeckSummary = (data) => {
    let keys = Object.keys(data).sort();
    let res = {};
    keys.forEach((key) => {
       res[key] = data[key].questions.length;
     })
    return res;
}
