import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';
import LoginForm from './LoginForm.js'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image style = {styles.logoPic} 
                    source = {require('../../../photos/placeholder.png')} />
                <Text style = {styles.logoInfo}>
                    Find like-minded people in your area to room with!
                </Text>
                </View>

                <View>
                    <LoginForm />
                </View>

                <View>
                    <Text style = {styles.signup}>
                        not a member? Tap here to sign up!
                    </Text>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005b72',
    },

    logoContainer: {
        alignItems:'center', 
        justifyContent: 'center',
        flexGrow: 1,       
    },

    logoPic: {
        height: 100,
        width: 200,
        backgroundColor: 'white',
    },

    logoInfo: {
        width: 200,
        textAlign: 'center',
        color: 'white',
    },

    inputform: {
        paddingBottom: 20,
        backgroundColor: 'white',
    },

    signup: {
        paddingBottom: 20,
        color: 'white',
        textAlign: 'center',
    },
});

