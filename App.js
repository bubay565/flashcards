import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import NewCard from './components/NewCard'
import NewDeck from './components/NewDeck'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { white, lightPurp } from './utils/colors'

const logger = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

const MainScreenNavigator = TabNavigator({
  Decks: {
    screen: DeckList
  },
  'New Deck': {
    screen: NewDeck
  }
}, {
  tabBarOptions: {
    activeTintColor: lightPurp,
    labelStyle: {
      fontSize: 20,
      fontWeight: '600'
    }
  }
})

const Stacks = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTitle: 'Deck Details',
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTitle: 'Add Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTitle: 'Quiz'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stacks />
        </View>
      </Provider>
    );
  }
}
