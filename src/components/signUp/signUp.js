import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage,
        TextInput, Image, TouchableHighlight, Navigator} from 'react-native';




export default class SignUp extends Component {


    constructor() {
        super() ;

        this.state = {
            username: '',
            password: '',
            repassword: '',
            email: '',
            error: '',
        }
    }
    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.signUpForm}>
                    <TextInput
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({username: text}) } />
                    <Text style = {styles.inputPrompt}>
                        Username
                    </Text>
                    <TextInput
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({email: text}) } />
                    <Text style = {styles.inputPrompt}>
                        Email
                    </Text>
                    <TextInput
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({password: text}) } />
                    <Text style = {styles.inputPrompt}>
                        Password
                    </Text>
                    <TextInput
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({repassword: text}) } />
                    <Text style = {styles.inputPrompt}>
                        Re-enter Password
                    </Text>


                    <TouchableHighlight>
                        <View style = {styles.signUpBotton}>
                            <Text style = {styles.buttonText}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11c7ff'
    },

    signUpForm: {
        paddingTop: 50,
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        backgroundColor: 'white',
        height: 40,
        width: 300,
        opacity: 0.7,
        textAlign: 'center',
    },
    inputPrompt: {
        paddingBottom: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    signUpBotton: {
        backgroundColor: 'white',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,

    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 32,
    }
});