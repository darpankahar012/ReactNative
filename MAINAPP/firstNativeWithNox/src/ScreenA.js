/* eslint-disable prettier/prettier */
import React from 'react';

import {
    Text,
    StyleSheet,
    View,
    Pressable,
} from 'react-native';


function ScreenA({ navigation }) {
    const omPressHandler = () => {
        navigation.navigate("Screen_B");
        // navigation.replace("Screen_B");
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen A
            </Text>
            <Pressable
                onPress={omPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? "#ddd" : "#0f0" })}
            >
                <Text style={styles.text}>
                    Go To Screen B
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    }
})

export default ScreenA;
