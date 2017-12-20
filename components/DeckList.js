import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { getDeck, getDeckSummary, initialiseAppData } from '../utils/helpers'
import { gray, red, lightPurp, white } from '../utils/colors'
import DeckHeader from './DeckHeader'
import { AppLoading } from 'expo'

export default class DeckList extends Component {
  constructor(props){
    super(props);
    initialiseAppData();
  }

  componentDidMount(){
    getDeckSummary()
    .then((deckSummary) => {
      console.log('decks ', deckSummary);
      this.setState({
        ready: true,
        deckSummary
      })
    })
  }

  state = {
    deckSummary: {},
    ready: false
  }

  render() {
    const { deckSummary, ready } = this.state;
    console.log('ready', ready)
    console.log('deckSummary ', deckSummary)

    if(ready === false){
      return <AppLoading />
    }

    return (
      <ScrollView style={styles.decklist}>
        <DeckHeader title={'FlashCards'} colour={'purple'}/>
        {Object.keys(deckSummary).map((deck, index) =>
          <View style={styles.deck} key={index}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', {deck: getDeck(deck)})}>
              <Text style={styles.decktitle}>{`${deck}`}</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{`${deckSummary[deck]} cards`}</Text>
          </View>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  decklist: {
    backgroundColor: white,
    flex: 1,
    overflow: 'scroll'
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
    justifyContent: 'center',
    minHeight: 200
  }
});
