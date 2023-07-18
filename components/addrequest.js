import React, { Component, useRef } from 'react';

import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Image } from 'react-native';
import { ADD_REQUEST_ENDPOINT } from '../constants'

class MainProject extends Component {


    constructor(props) {

        super(props)

        this.state = {

            TextInputName: '',
            TextInputDescription: '',


        }

    }

    InsertDataToServer = () => {
        const { TextInputName, TextInputDescription } = this.state;

        fetch(ADD_REQUEST_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requestby: TextInputName,
                description: TextInputDescription,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
                // Resetting the input values to empty strings
                this.setState({ TextInputName: '', TextInputDescription: '' });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={styles.ViewStyle}>
                <View style={styles.MainContainer}>


                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter Name"

                        onChangeText={TextInputName => this.setState({ TextInputName })}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.TextInputStyleClass}
                    />

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter Description"

                        onChangeText={TextInputDescription => this.setState({ TextInputDescription })}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.TextInputStyleClass}
                    />



                    <Button title="Add request" onPress={this.InsertDataToServer} color="black" />



                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,

        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,

    },
    logocontainer2: {
        width: '70%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto'

    },
    logoStyle: {
        width: '90%',
        height: '100%',
        marginTop: 'auto'
    },
    logo: {
        height: '100%',
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,


    },
    ViewStyle:
    {
        paddingTop: 20,
        flex: 1,
        padding: 10,
        marginTop: 1,
        backgroundColor: '#ffc819',

    },

    TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: 'black',

        // Set border Radius.
        borderRadius: 10,
    }

});

AppRegistry.registerComponent('MainProject', () => MainProject);

export default MainProject