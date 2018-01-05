import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { getDeck } from '../actions'
import DeckHeader from './DeckHeader'
import TextButton from './TextButton'
import { purple, red, white, lightPurp, gray } from '../utils/colors'
import { AppLoading } from 'expo'

class DeckDetail extends Component{
  componentDidMount(){
    const { deck } = this.props.navigation.state.params;
    this.props.dispatch(getDeck(deck));
  }

  render(){
    const { deck, deckReady } = this.props
    console.log('init props: ', this.props)

    if(deckReady === false){
      return <AppLoading />
    }

    return (
      <View style={styles.deck}>
        {console.log('props', this.props)}
        {console.log('detail deck', deck)}
        {console.log('detail deck title', deck.title)}
        <DeckHeader title={deck.title} colour={'red'}/>
        <Text style={styles.decktitle}>{`${deck.questions.length} cards`}</Text>
        <View>
        <TextButton label={"Add Card"} onPress={() => this.props.navigation.navigate('NewCard', {deckTitle: deck.title})}/>
        <TextButton label={"Start Quiz"} onPress={() => this.props.navigation.navigate('Quiz', {deck})}/>
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
  console.log('state detail', state.deck)
  return {
    deck: state.deck,
    deckReady: state.deckReady
  }
}

export default connect(mapStateToProps)(DeckDetail)
