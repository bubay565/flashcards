import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { getDecks, initialiseAppData } from '../actions'
import { gray, red, lightPurp, white } from '../utils/colors'
import { getDeckSummary } from '../utils/helpers'
import DeckHeader from './DeckHeader'
import { AppLoading } from 'expo'

class DeckList extends Component {
  constructor(props){
    super(props);
    this.props.dispatch(initialiseAppData());
  }

  componentDidMount() {
    this.props.dispatch(getDecks());
  }

  /*async componentDidMount(){
    try {
      const deckSummary = await getDeckSummary()
      this.setState({
        ready: true,
        deckSummary
      })
    }
    catch(err){
      console.log(err)
    }
  }*/

  componentDidUpdate(){
    this.props.dispatch(getDecks())
  }

  render() {
    const { allDecks, appReady } = this.props;
    const deckSummary = getDeckSummary(allDecks)
    console.log('appReady', appReady)
    console.log('deckSummary ', deckSummary)

    if(appReady === false){
      return <AppLoading />
    }

    return (
      <ScrollView style={styles.decklist}>
        <DeckHeader title={'FlashCards'} colour={'purple'}/>
        {Object.keys(deckSummary).map((deck, index) =>
          <View style={styles.deck} key={index}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', { deck })}>
              <Text style={styles.decktitle}>{`${deck}`}</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{`${deckSummary[deck]} cards`}</Text>
          </View>
        )}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  console.log('state decklist', state.deckSummary)
  return {
    allDecks: state.allDecks,
    appReady: state.appReady
  }
}

export default connect(mapStateToProps)(DeckList)

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
