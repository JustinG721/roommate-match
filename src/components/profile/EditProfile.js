import React, {Component} from 'react';
import {StyleSheet, 
        View,
        Text, 
        Button, 
        TextInput, 
        Image,
        TouchableHighlight} from 'react-native';



export default class EditProfile extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            accessToken: this.props.accessToken,

        }

    }

    redirect(routeName){
        this.props.navigator.push({
            name: routeName,
            passProps: {
                first_name: this.state.first_name,
                last_name: this.state.last_name
            }
        });
    }

    async onEditPressed() {
        try{
                let response = await fetch('https://roomies-backend-prithajnath.c9users.io/update_profile', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Token ' + this.state.accessToken
                },
                body: "email="+this.state.email+
                        "&first_name="+this.state.first_name+
                        "&last_name="+this.state.last_name,
                });

                this.redirect('Profile')

        } catch(error) {
            console.log('an error has occured on EditProfile Component')
            console.log(error)
        }


    }


    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.who}> WHO ARE YOU??? </Text>
                <View style = {styles.inputForm}>
                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style = {styles.inputBox}
                        onChangeText = {(text) => this.setState({first_name: text}) } />
                        <Text style = {styles.inputPrompt}>
                            what's your first name?
                        </Text>

                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style = {styles.inputBox}
                        onChangeText = {(text) => this.setState({last_name: text}) } />
                        <Text style = {styles.inputPrompt}>
                            What's your last name????
                        </Text>

                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style = {styles.inputBox}
                        onChangeText = {(text) => this.setState({email: text}) } />
                        <Text style = {styles.inputPrompt}>
                            Email???????
                        </Text>
                </View>

                <TouchableHighlight
                onPress = {this.onEditPressed.bind(this)}>
                    <View style = {styles.editProfileButton}>
                        <Text> Submit Changes </Text>
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
    who: {
        fontSize: 24,
        paddingTop: 24,
    },
    inputForm: {
        paddingTop: 50,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        backgroundColor: 'white',
        height: 40,
        width: 300,
        opacity: 0.60,
        textAlign: 'center',
    },
    inputPrompt: {
        paddingBottom: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    editProfileButton: {
        backgroundColor: 'white',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

});