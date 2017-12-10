import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getDeck, getDeckSummary } from '../utils/helpers'
import { gray, red, lightPurp, white } from '../utils/colors'
import DeckHeader from './DeckHeader'

export default class DeckList extends Component {
  render() {
    const deckSummary = getDeckSummary();
    console.log('decks ', deckSummary);
    return (
      <View style={styles.decklist}>
        <DeckHeader title={'FlashCards'} />
        {Object.keys(deckSummary).map((deck, index) =>
          <View style={styles.deck} key={index}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', {deck: getDeck(deck)})}>
              <Text style={styles.decktitle}>{`${deck}`}</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{`${deckSummary[deck]} cards`}</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  decklist: {
    backgroundColor: white,
    flex: 1
  },
  decktitle: {
    color: red,
    fontSize: 45,
    fontWeight: 'bold'
  },
  textStyle: {
    color: gray,
    fontSize: 25
  },
  deck: {
    flex:1,
    backgroundColor: white,
    borderBottomColor:lightPurp,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
