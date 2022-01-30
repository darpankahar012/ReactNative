/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const customButton = props => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            android_ripple={{ color: '#00f' }}
            // when click around button
            // hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            // disabled={submited}
            // onLongPress={handlePressButton}
            // delayLongPress={500}
            // onPress={handlePressButton}
            // style={styles.button}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddd' : '#00ff00' },
                styles.button,
            ]}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        // backgroundColor: "#00ff00"
    },
});

export default customButton;
