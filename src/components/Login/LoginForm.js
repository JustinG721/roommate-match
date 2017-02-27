import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                style = {styles.input}
                />
                <Text>
                    enter your username
                </Text>
                
                <TextInput
                style = {styles.input} 
                />
                <Text>
                    enter your password
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        alignItems: 'center',
    },

    input : {
        height: 40,
        width: 200,
        paddingBottom: 20,
    },
});