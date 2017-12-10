import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DisplayQuizQuestion from './DisplayQuizQuestion'
import QuizComplete from './QuizComplete'
import { getDeck } from '../utils/helpers'


export default class Quiz extends Component {
  state = {
    score : 0,
    indexCount : 0
  }

  updateState = (scoreAction) => {
    let score = scoreAction === 'increment' ? this.state.score + 1 : this.state.score
    let indexCount = this.state.indexCount + 1
    this.setState({
      score,
      indexCount
    })
  }

  generateTotalScore = () => {
    return Math.round((this.state.score / this.state.indexCount) * 100)
  }

  render(){
    const deckTitle = this.props.navigation.state.params.deckTitle;
    const card = getDeck(deckTitle).questions;
    console.log('Quiz title ', deckTitle)
    console.log('index ', this.state.indexCount)

    if(this.state.indexCount === card.length){
     return (
        <QuizComplete
          score={this.generateTotalScore()}
        />
      )}
     return (
        <DisplayQuizQuestion
            question={card[this.state.indexCount].question}
            answer={card[this.state.indexCount].answer}
            explanation={card[this.state.indexCount].explanation}
            updateState={this.updateState}
        />
      )
  }
}
