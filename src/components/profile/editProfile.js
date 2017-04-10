import React, {Component} from 'react';
import {StyleSheet, View, Text, Navigator, 
        Button, Image, AsyncStorage, TouchableHighlight,} from 'react-native';



export default class editProfile extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text> hello world </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#11c7ff',
    }
});
