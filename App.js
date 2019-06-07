import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Buttons from './components/Buttons';

export default class App extends React.Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Hello There Ezra</Text>
        <Buttons></Buttons>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import {vibrate} from './utils'

// // causes phone to vibrate
// vibrate()