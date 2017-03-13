import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.wrapper}>

                    <Text style={styles.title}>
                         Roomies
                    </Text>

                    <Text style={styles.subtitle}>
                        Find your match
                    </Text>
                    
                </View>

                <View>
                    <Text style = {styles.bottomPart}> 
                        Powered by react native
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#11c7ff',
    },

    subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    },
    
    title: {
      fontSize: 32,
      textAlign: 'center',
      fontWeight: 'bold',
      alignItems: 'center',
      color: 'white',
    },
    
    wrapper: {
        flex: 1,
        justifyContent: 'center',
    },

    bottomPart: {
        textAlign: 'center',
        paddingBottom: 10,
        color: 'white',
    }
});
