import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Input, Image} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View>
                    <Image style = {styles.logo} 
                    source = {require('../../../photos/placeholder.png')} />
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005b72',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        height: 100,
        width: 200,
        backgroundColor: 'white',
        paddingBottom: 20,
    }
});

