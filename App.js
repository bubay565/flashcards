import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import { StackNavigator } from 'react-navigation'
import { white } from './utils/colors'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Stacks />
      </View>
    );
  }
}

const Stacks = StackNavigator({
  Home: {
    screen: DeckList,
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
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
});
