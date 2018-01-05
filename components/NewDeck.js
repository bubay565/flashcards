import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { addNewDeck } from '../actions'
import { orange, gray, red } from '../utils/colors'

class NewDeck extends Component{
  state = {
    deckTitle : 'Enter Deck Title'
  }

  createNewDeck = () => {
    this.props.dispatch(addNewDeck(this.state.deckTitle))
    this.setState({deckTitle : 'Enter Deck Title'})
    this.props.navigation.navigate('Decks')
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
          onPress={() => this.createNewDeck()}
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
    width: 300,
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

export default connect()(NewDeck)
