import React from 'react'
import { ImageBackground, View, TextInput, TouchableOpacity, Button, Image, BackHandler, Platform, Text } from 'react-native';

import CustomeTextInput from '../component/CustomeTextInput'


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            fname: "",
            lname: "",
            password: ""
        }
    }

    componentDidMount = () => {

    }

    onPressSignUp = () => {

        if (this.state.email != "" && this.state.password != "" && this.state.fname != "" && this.state.lname != "") {
            fetch("https://api.oopacks.com/api/test/register", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailorphonenumber: this.state.email,
                    password: this.state.password,
                    firstName: this.state.fname,
                    lastname: this.state.lname,
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

    onPressLogin = () => {
        this.props.navigation.navigate("LoginScreen")
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', color: "white", fontSize: 30 }} >Sign Up </Text>
                </View>
                <View style={{ flex: 4, alignContent: 'center', borderTopLeftRadius: 50, paddingHorizontal: 50, paddingVertical: 20, backgroundColor: "gray" }}>

                    <View style={{ paddingVertical: 50 }}>
                        <CustomeTextInput onChangeText={(val) => this.setState({ fname: val })} placeholder="First Name" />

                        <CustomeTextInput onChangeText={(val) => this.setState({ lname: val })} placeholder="Last Name" />


                        <CustomeTextInput onChangeText={(val) => this.setState({ Email: val })} placeholder="E-mail" />

                        <CustomeTextInput secureTextEntry={true} onChangeText={(val) => this.setState({ password: val })} placeholder="Password" />


                        <TouchableOpacity onPress={() => this.onPressSignUp()} style={{ padding: 15, borderRadius: 5, marginTop: 10, backgroundColor: "black" }}>
                            <Text style={{ alignSelf: "center", color: "white" }} >Sign Up </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.onPressLogin()} style={{ padding: 8, borderRadius: 10, }}>
                        <Text style={{ alignSelf: "center", color: "black", fontSize: 10 }} >You hve a account? Login </Text>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }
}
