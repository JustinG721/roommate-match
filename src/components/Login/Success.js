import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';



export default class Success extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> login successful</ Text>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#005b72',
    }

});