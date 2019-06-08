import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {vibrate} from '../utils'

export default class Buttons extends React.Component {
    handlePress = (res) => {
        console.log('click')
        vibrate()
    }
    
    render() {
        return (
            <View
            style={styles.container}>
                <Button
                style={styles.button}
            title='Start'
            color='green'
            onPress={this.handlePress}
            />
            <Button
            style={styles.button}
            title='Pause'
            color='blue'
            onPress={this.handlePress}
            />
            <Button
            style={styles.button}
            title='Stop'
            color='red'
            onPress={this.handlePress}
            />
            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
    }
})

