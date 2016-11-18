import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  View
} from 'react-native';

import colors from '../utils/colors';

export default class testApp extends Component {
  render() {
    return (
      <View style={styles.container}>

        <StatusBar barStyle="default" />

        <Text style={styles.welcome}>
          Welcome to React Native Tests!
        </Text>
        
        <TextInput style={styles.searchBox} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  searchBox: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800'
  }
});