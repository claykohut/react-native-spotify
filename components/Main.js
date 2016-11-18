import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  StatusBar
} from 'react-native';

import colors from '../utils/colors';

import ListItem from './ListItem'

export default class Main extends Component {

  constructor(props) {
    
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const data = ['Spectacles', 'Giraffe', 'Turtle', 'Clay', 'Shark', 'Lamb', 'Salt',
      'Beef', 'Drawer', 'Brocolli', 'Raspberries', 'Plate', 'Zebra']

    this.state = { artists: dataSource.cloneWithRows(data) };

  }


  renderRow = (text, sId, rId) => {
    return (
      <ListItem index={ rId }
        text={text}
        image={null} />
    );
  }

  render() {
    const { artists } = this.state;

    return(
      <View style={styles.container}>

        <StatusBar barStyle="default" />

        <TextInput style={styles.searchBox} />

        <ListView dataSource={ artists }
            style={{ flex: 1, alignSelf: 'stretch' }}
            renderRow={ this.renderRow } />

      </View>
    )

  }

}


const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  searchBox: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800'
  },
  row: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20
  }
});