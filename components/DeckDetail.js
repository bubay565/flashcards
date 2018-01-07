import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { getDeck } from '../actions'
import DeckHeader from './DeckHeader'
import TextButton from './TextButton'
import { purple, red, white, lightPurp, gray } from '../utils/colors'
import { AppLoading } from 'expo'

class DeckDetail extends Component{
  render(){
    const { allDecks, deckReady } = this.props
    const deck = allDecks[this.props.navigation.state.params.deck]

    if(deckReady === false){
      return <AppLoading />
    }

    return (
      <View style={styles.deck}>
        <DeckHeader title={deck.title} colour={'red'}/>
        <Text style={styles.decktitle}>{`${deck.questions.length} cards`}</Text>
        <View>
        <TextButton label={"Add Card"} onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: deck.title})}/>
        {
          deck.questions.length > 0 ?
            <TextButton label={"Start Quiz"} onPress={() => this.props.navigation.navigate('Quiz', {deck})}/>
          : null
        }
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

function mapStateToProps(state) {
  return {
    allDecks: state.allDecks,
    deckReady: state.deckReady
  }
}

export default connect(mapStateToProps)(DeckDetail)
