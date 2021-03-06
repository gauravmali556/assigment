import React from 'react'
import { ImageBackground, View, TextInput, TouchableOpacity, Button, Image, BackHandler, Platform, Text } from 'react-native';

import CustomeTextInput from '../component/CustomeTextInput'


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            password: ""
        }
    }

    componentDidMount = () => {

    }

    onPressLogin = () => {

        if (this.state.email != "" && this.state.password != "") {
            fetch("https://api.oopacks.com/api/test/login", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailorphonenumber: this.state.email,
                    password: this.state.password
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("responseJson****", responseJson)
                })
                .catch((error) => {
                    console.log("error****", error)
                });
        }
    }

    onPressSignUp = () => {
        this.props.navigation.navigate("SignUp")
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', color: "white", fontSize: 30 }} >OOPACKS </Text>
                </View>
                <View style={{ flex: 4, alignContent: 'center', borderTopLeftRadius: 50, paddingHorizontal: 50, paddingVertical: 20, backgroundColor: "gray" }}>
                    <Text style={{ alignSelf: 'center', color: "black", fontSize: 30 }} >Login </Text>

                    <View style={{ paddingVertical: 50 }}>
                        <CustomeTextInput onChangeText={(val) => this.setState({ Email: val })} placeholder="E-mail" />
                        <CustomeTextInput secureTextEntry={true} onChangeText={(val) => this.setState({ password: val })} placeholder="Password" />

                        <TouchableOpacity onPress={() => this.onPressLogin()} style={{ padding: 15, borderRadius: 5, marginTop: 10, backgroundColor: "black" }}>
                            <Text style={{ alignSelf: "center", color: "white" }} >Login </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.onPressSignUp()} style={{ padding: 8, borderRadius: 10, }}>
                        <Text style={{ alignSelf: "center", color: "black", fontSize: 10 }} >Don't have any account? sign up </Text>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }
}
