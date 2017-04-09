import React, {Component} from 'react';
import {StyleSheet, View, Text, Navigator, TouchableHighlight,
        Button, TextInput, Image, AsyncStorage} from 'react-native';

const ACCESS_TOKEN = 'access_token';


export default class Profile extends Component {

    constructor (props) {
        super (props) ;

        this.state = {
            name: '',
            email: '',
            accessToken: '',
        }
    }

    componentWillMount() {
        this.getToken() ;
    }

    async getProfile(token) {
        let auth = ('Token ' + token)
        try {
            let profile = await fetch("https://roomies-backend-prithajnath.c9users.io/get_profile", {
                headers: {
                Authorization: auth
                }
            })


            let test = await profile.text();
            nest = JSON.parse(test);
            this.setState({email:nest['email'], name:nest['username']})
        }catch (error) {
            console.log('an error has occured, asshole')
            console.log(error)

        }
    }
    async getToken() {
        try {
            let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN) ;
            if (!accessToken) {
                this.redirect('Login') ;
            } else {
                this.setState({accessToken: accessToken})
                this.getProfile(accessToken)
            }
        } catch (error) {
            console.log('Something went wrong with getToken on Profile', error) ;
            console.log('error:', error);
            this.redirect('Login');
        }
    }
    redirect(routeName){
        this.props.navigator.push({
            name: routeName,
            passProps: {
                accessToken: this.state.accessToken
            }
        });
    }


    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.welcome}> 
                    Your access token is {this.state.accessToken}
                </Text>
                <Text style = {styles.welcome}>
                    Your username is {this.state.name}
                </Text>
                <Text style = {styles.welcome}>
                    Your email is {this.state.email}
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#11c7ff',
    },
    welcome: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 32,
    },
})