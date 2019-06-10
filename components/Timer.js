import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { propTypes } from 'react-native/Libraries/Modal/Modal';

const Timer = (props) => {
    return (
        <View>
            <Text>Count: {props.count}</Text>
            <Text>Break: {props.break}</Text>
        </View>
    )
}

export default Timer;