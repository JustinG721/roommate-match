import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage,
        TextInput, Image, TouchableHighlight, Navigator} from 'react-native';


export default class SignUp extends Component {


    constructor() {
        super() ;

        this.state = {
            username: '',
            password: '',
            repassword: '',
            email: '',
            errors: [],
        }
    }

    checkPasswords() {
        if (this.state.password != this.state.repassword) {
            this.setState({errors: 'the passwords don\'t match'});
            return (false) ;
        } else {
            this.setState({errors: ''});
            return (true) ;
        }
    }

    redirect(routeName, accessToken){
        this.props.navigator.push({
        name: routeName
        });
    }

    async storeToken(accessToken) {
        try {
            await AsyncStorage.setItem('access_token', accessToken);
            console.log("Token was stored successfully");
        } catch(error) {
            console.log("Something went wrong in the signUp page");
        }
    }


    async onRegisterPressed() {
        try {
            let response = await fetch('https://roomies-backend-prithajnath.c9users.io/sign_up/', {
                method: 'POST',
                headers: {
                    //'Accept': 'application/json',
                    //'Content-Type': 'application/json',
                    'Content-Type':'application/x-www-form-urlencoded'
                },
            /*   
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
            */
            body: "username="+this.state.username+"&password="+this.state.password+"&email="+this.state.email,
        });
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
            //Handle success
            let accessToken = res;
            console.log(accessToken);
            //On success we will store the access_token in the AsyncStorage
            this.storeToken(accessToken);
            this.redirect('Login');
        } else {
            //Handle error
            let error = res;
            throw error;
        }
        } catch(errors) {
            //errors are in JSON form so we must parse them first.
            let formErrors = JSON.parse(errors);
            //We will store all the errors in the array.
            let errorsArray = [];
            for(var key in formErrors) {
                //If array is bigger than one we need to split it.
                if(formErrors[key].length > 1) {
                    formErrors[key].map(error => errorsArray.push(`${key} ${error}`));
                } else {
                    errorsArray.push(`${key} ${formErrors[key]}`);
                }
        }
            this.setState({errors: errorsArray})
            //this.setState({showProgress: false});
        }
    }
    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.signUpForm}>
                    <TextInput
                    underlineColorAndroid = {'transparent'}
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({username: text}) } />
                    <Text style = {styles.inputPrompt}>
                        Username
                    </Text>
                    <TextInput
                    underlineColorAndroid = {'transparent'}
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({email: text}) } />
                    <Text style = {styles.inputPrompt}>
                        Email
                    </Text>
                    <TextInput
                    underlineColorAndroid = {'transparent'}
                    style = {styles.inputBox}
                    onChangeText = {(text) => this.setState({password: text}) } 
                    />
                    <Text style = {styles.inputPrompt}>
                        Password
                    </Text>
                    <TextInput
                    style = {styles.inputBox}
                    underlineColorAndroid = {'transparent'}
                    onChangeText = {(text) => this.setState({repassword: text}) }
                    onSubmitEditing = {this.checkPasswords.bind(this)} />
                    <Text style = {styles.inputPrompt}>
                        Re-enter Password
                    </Text>

                    <Text style={styles.errors}>
                        {this.state.errors}
                    </Text>
                </View>

                <View style = {styles.signUp}>
                    <TouchableHighlight
                    onPress = {this.onRegisterPressed.bind(this)}>
                        <View style = {styles.signUpButton}>
                            <Text style = {styles.buttonText}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11c7ff'
    },

    signUpForm: {
        paddingTop: 50,
        //flex: 1,
        //justifyContent: 'center',
        marginBottom: 50,
        alignItems: 'center'
    },

    inputBox: {
        backgroundColor: 'white',
        height: 40,
        width: 300,
        opacity: 0.7,
        textAlign: 'center',
    },
    inputPrompt: {
        paddingBottom: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    signUpButton: {
        backgroundColor: 'white',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 60,
    },

    signUp: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 32,
    },

    errors: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
    },
});