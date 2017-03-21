/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet,
    Text, View, Navigator, } from 'react-native';

import Splash from './Splash.js' ;
import Login from './src/components/Login/Login.js'
import Success from './src/components/Login/Success.js'
import SignUp from './src/components/signUp/signUp.js'


export default class roomMateMatch extends Component {

    renderScene(route, navigator) {
        if (route.name == 'Splash') {
            return <Splash navigator = {navigator} />
        }
        if (route.name == 'Login') {
            return <Login navigator = {navigator} />
        }
        if (route.name == 'Success') {
            return <Success navigator = {navigator} />
        }
        if (route.name == 'SignUp') {
            return <SignUp navigator = {navigator} />
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <Navigator
                initialRoute = {{name: 'SignUp'}}
                renderScene = {this.renderScene.bind(this)} />
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11c7ff',
    },
});

AppRegistry.registerComponent('roomMateMatch', () => roomMateMatch);
