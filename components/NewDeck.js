import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { saveDeckTitle } from '../utils/helpers'
import { orange, gray, red } from '../utils/colors'

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
      <View style={styles.deck}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
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

const styles = StyleSheet.create({
  title: {
    color: red,
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10
  },
  textInput : {
    height: 40,
    width: 380,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10
  },
  deck: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
