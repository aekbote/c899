import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Logout extends Component {
    componentDidMount( ){
        firebase.auth().signOut();
        this.props.navigation.navigate("Login");
    }


    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Logout</Text>
            </View>
        )
    }
}