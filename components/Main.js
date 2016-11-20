import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { debounce } from 'lodash'
import colors from '../utils/colors';
import {searchFor} from '../utils/fetcher'

import ListItem from './ListItem'

export default class Main extends Component {

  constructor(props) {
    
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    // const data = ['Spectacles', 'Giraffe', 'Turtle', 'Clay', 'Shark', 'Lamb', 'Salt',
    //   'Beef', 'Drawer', 'Brocolli', 'Raspberries', 'Plate', 'Zebra']

    this.state = { artists: dataSource };

  }


  renderRow = (artist, sId, rId) => {
    //console.log('doing render row with artist ', artist)
    const { navigator } = this.props;

    const ARTIST_STATE = {
      id: 'ARTIST_DETAIL',
      title: artist.name,
      url: artist.external_urls.spotify
    }

    const imageUrl = artist.images[0] ? artist.images[0].url : null;

    console.log('imgUrl , ' + imageUrl)

    return (
      <ListItem 
        index={ rId }
        text={artist.name} 
        imageUrl={imageUrl}
        navState={ ARTIST_STATE } 
        navigator={ navigator } />
    );
  }

  render() {
    const { artists } = this.state;

    return(
      <View style={styles.container}>

        <StatusBar barStyle="light-content" />

        <TextInput style={styles.searchBox} 
          ref={component => this._textInput = component}
          onChangeText={ this.makeQuery }
          clearButtonMode={'always'} />

        <ListView dataSource={ artists }
            style={ styles.listView }
            renderRow={ this.renderRow } />

      </View>
    )

  }
 
 makeQuery = debounce(query => {
    console.log('query? ', query);
    searchFor(query)
      .then(artists => {
        console.log(artists, ' got response')
        this.setState({
          artists: this.state.artists.cloneWithRows(artists)
        })
      })
      .catch(error => {
        throw error;
      })

 }, 400)

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
  listView: { 
    flex: 1, 
    alignSelf: 'stretch'
  },
  row: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20
  }
});