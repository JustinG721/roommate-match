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

export default class roomMateMatch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.wrapper}>
                    <Text style={styles.welcome}>
                        Roommate Match
                    </Text>
                    <Text style={styles.subtitle}>
                        Find your match
                    </Text>
                </View>

                <View>
                    <Text style = {styles.bottomPart}> powered by react native</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#79daf2',
    },

    subtitle: {
    fontSize: 14,
    textAlign: 'center',
    },
    
    welcome: {
      fontSize: 32,
      textAlign: 'center',
      margin: 10,
      paddingTop: 20,
    },
    
    wrapper: {
        flex: 1,
    },

    bottomPart: {
        textAlign: 'center',
    }
});

AppRegistry.registerComponent('roomMateMatch', () => roomMateMatch);
