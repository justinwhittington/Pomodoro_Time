import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Buttons extends React.Component {
    render() {
        const handlePress = (res) => {
            alert(res.title)
        }
        return (
            <View>
                <Button
            title='Start'
            color='green'
            onPress={handlePress(this)}
            ></Button>
            <Button
            title='Pause'
            color='blue'
            onPress={handlePress(this)}
            ></Button>
            <Button
            title='Stop'
            color='red'
            onPress={handlePress(this)}
            ></Button>
            </View>
        
        );
    }
}

