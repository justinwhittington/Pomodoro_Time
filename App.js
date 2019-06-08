import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {vibrate} from './utils';
import {Buttons, Timer} from './components';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 25, break: 5 }
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Hello There Ezra</Text>
        <Timer />
        <Buttons
        />
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




