import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {vibrate} from './utils';
import {Buttons, Timer} from './components';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      minutes: 25, 
      break: 4,
      count: 5
    }
  }

  onStart = () => {
    console.log('start')
    this.countDownTime()
  }

  countDownTime = () => {
    console.log('count down time')
    let timer = setInterval(() => {
      let newCount = this.state.count - 1;
      if (this.state.count == 0) {
        
        clearInterval(timer)
        this.countDownBreakTime();
      } else {
        this.setState({
          count: newCount >= 0 ? newCount: 0
        })
        console.log(this.state.count)
      }
    }, 1000)
  }

  countDownBreakTime = () => {
    console.log('count down break')
    let breakTime = setInterval(() => {
      let newBreak = this.state.break -1;
      if (this.state.break == 0) {
        clearInterval(breakTime)
      } else {
        this.setState({
          break: newBreak >= 0 ? newBreak: 0
        })
      }
    }, 1000)
  }

  onPause = () => {
    
    const pause = this.state.count;
    console.log('pause' + pause)
  }

  onReset = () => {
    console.log('Reset')
    vibrate()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Timer 
        minutes={this.state.minutes}
        count={this.state.count}
        break={this.state.break}
        />
        <Buttons
        onStart={this.onStart}
        onPause={this.onPause}
        onReset={this.onReset}
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




