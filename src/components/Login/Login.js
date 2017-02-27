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

                <View style = {styles.inputContainer}>
                    <LoginForm />
                </View>

                <View style = {styles.signInOrUp}>
                    <View style = {styles.signUpBox}>
                        <Text style = {styles.signIn}>
                            SIGN UP
                        </Text>
                    </View>
                    <View style = {styles.signInBox}>
                        <Text style = {styles.signUp}>
                            SIGN IN
                        </Text>
                    </View>    
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

    inputContainer: {
        paddingBottom: 50,
        justifyContent: 'center',
    },

    signInOrUp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },

    signUpBox: {
        paddingRight: 100,
        borderColor: 'black',
    },

    signUp: {
        fontSize: 20,
    },

    signInBox: {
        paddingLeft: 100,
    },

    signIn: {
        fontSize: 20,
    },
});

