/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Splash from './Splash.js' ;
import Login from './src/components/Login/Login.js'
import Success from './src/components/Login/Success.js'

export default class roomMateMatch extends Component {
    render() {
        return (
            <Login/>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('roomMateMatch', () => roomMateMatch);
