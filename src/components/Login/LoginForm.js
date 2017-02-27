import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                style = {styles.input}
                underlineColorAndroid = {'transparent'}
                />
                <Text style = {styles.inputPrompt}> 
                    Enter your username
                </Text>

                <TextInput
                style = {styles.input} 
                />
                <Text style = {styles.inputPrompt}>
                    Enter your password
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        width: 200,
        backgroundColor: '#007e9e',
        opacity: 0.9,
        textAlign: 'center',
    },

    inputPrompt: {
        paddingBottom: 30,
    },
});