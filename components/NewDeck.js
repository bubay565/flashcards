import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { saveDeckTitle } from '../utils/helpers'
import { orange } from '../utils/colors'

export default class NewDeck extends Component{
  state = {
    deckTitle : 'Enter Deck Title'
  }

  /*static navigationOptions = ({ navigation }) => {
    return {
      title: `Create new deck`,
    }
  };*/

  addNewDeck = (deckTitle) => {
    saveDeckTitle(deckTitle)
    this.setState({deckTitle : 'Enter Deck Title'})
  }

  render(){
    return(
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
        />
        <Button
          onPress={() => this.addNewDeck()}
          title="Submit"
          color={orange}
        />
      </View>
    )
  }
}
