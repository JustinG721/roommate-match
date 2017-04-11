import React, {Component} from 'react';
import {StyleSheet, View, Text, Navigator, 
        Button, Image, AsyncStorage, TouchableHighlight,} from 'react-native';

const ACCESS_TOKEN = 'access_token';


export default class Profile extends Component {

    constructor (props) {
        super (props) ;

        this.state = {
            username: '',
            email: '',
            accessToken: '',
            first_name : '',
            last_name: '',
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
            this.setState({
                email: nest['email'],
                username: nest['username'],
                first_name: nest['first_name'],
                last_name: nest['last_name']
            })
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
                    Your username is {this.state.username}
                </Text>
                <Text style = {styles.welcome}>
                    Your email is {this.state.email}
                </Text>
                <Text style = {styles.welcome}>
                    Your name is {this.state.first_name} {this.state.last_name}
                </Text>                
                <TouchableHighlight
                onPress = {this.redirect.bind(this, 'EditProfile')}>
                    <View style = {styles.editProfileButton}>
                        <Text> Edit Profile </Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#11c7ff',
        alignItems: 'center',
    },
    welcome: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 32,
    },
    editProfileButton: {
        backgroundColor: 'white',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
})