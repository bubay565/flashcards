import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getDeck } from '../utils/helpers'
import DeckHeader from './DeckHeader'
import TextButton from './TextButton'
import { purple, red, white, lightPurp, gray } from '../utils/colors'
import { AppLoading } from 'expo'

export default class DeckDetail extends Component{
  render(){
    const { params } = this.props.navigation.state
    return (
      <View style={styles.deck}>
        {console.log('props', params)}
        {console.log('detail deck', params.deck)}
        {console.log('detail deck title', params.deck.title)}
        <DeckHeader title={params.deck.title} colour={'red'}/>
        <Text style={styles.decktitle}>{`${params.deck.questions.length} cards`}</Text>
        <View>
        <TextButton label={"Add Card"} onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: params.deck.title})}/>
        <TextButton label={"Start Quiz"} onPress={() => this.props.navigation.navigate('Quiz', {deckTitle: params.deck.title})}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  decktitle: {
    color: gray,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  deck: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
});
