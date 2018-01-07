import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { addCardToDeck, getDecks } from '../actions'
import { orange, gray, red, white } from '../utils/colors'
import RadioButton from './RadioButton'

class NewCard extends Component{
  state = {
    question : 'Enter Question',
    answer: 'Enter Answer',
    rad1: false,
    rad2: false
  }

  addNewCard = () => {
    const { deckTitle } = this.props.navigation.state.params
    const card = {
      question: this.state.question,
      explanation: this.state.answer,
      answer: this.state.rad1 === true ? 'correct' : 'incorrect'
    }

    this.props.dispatch(addCardToDeck(deckTitle, card))

    this.setState({
      question : 'Enter Question',
      answer: 'Enter Answer',
      rad1: false,
      rad2: false
    })
    this.props.navigation.goBack()
  }

  determineState = async (id) => {
    console.log('id: ', id)
    if(!this.state[id]){
      await this.setState({
        [id] : true
      })
    }

    if(id === 'rad1' && this.state.rad2 === true){
      await this.setState({
        rad2: false
      })
    } else if(id === 'rad2' && this.state.rad1 === true){
      await this.setState({
        rad1: false
      })
    }
  }

  componentDidUpdate() {
    this.props.dispatch(getDecks())
  }

  render(){
    return(
      <View style={styles.deck}>
        <Text style={styles.title}>Enter card details below</Text>
        <View>
          <Text>Question</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
          />
        </View>

        <View>
          <Text>Explanation</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
          />
        </View>

        <View>
          <Text>Answer</Text>
          <RadioButton label={'Correct'} selected={this.determineState} id={'rad1'} radioState={this.state.rad1}/>
          <RadioButton label={'Incorrect'} selected={this.determineState} id={'rad2'} radioState={this.state.rad2}/>
        </View>
        <Button
          onPress={() => this.addNewCard()}
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
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  textInput : {
    minHeight: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10
  },
  textArea : {
    minHeight: 70,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10
  },
  deck: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default connect()(NewCard)
