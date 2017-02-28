import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, 
        TextInput, Image, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm.js';
import Success from './Success.js';


export default class Login extends Component {

    constructor () {
        super ()

        this.state = {
            username: '',
            password: '',
            error: '',
            showProgress: false,
        }
    }

async onLoginPressed() {
    this.setState({showProgress: true})
    try {
      let response = await fetch('https://djangorest-prithajnath.c9users.io/get_auth_token/', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                session:{
                                  email: this.state.email,
                                  password: this.state.password,
                                }
                              })
                            });
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
          //Handle success
          let accessToken = res;
          console.log(accessToken);
          //On success we will store the access_token in the AsyncStorage
          this.storeToken(accessToken);
          this.redirect('Success');
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        this.setState({showProgress: false});
    }

    } 
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
                        <Text style = {styles.button}>
                            SIGN UP
                        </Text>
                    </View>
                    <View style = {styles.signInBox}>
                        <TouchableHighlight 
                        onPress={this.onLoginPressed.bind(this)}>
                            <Text style = {styles.button}>
                                SIGN IN
                            </Text>
                        </TouchableHighlight>
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
        paddingBottom: 10,
        backgroundColor: '#004b5e',
        paddingTop: 10,
    },

    signUpBox: {
        paddingRight: 100,
    },

    button: {
        fontSize: 20,
        color: 'white',
    },

    signInBox: {
        paddingLeft: 100,
    },

});

