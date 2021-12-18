import React from 'react'
import { ImageBackground, View, TextInput, TouchableOpacity, Button, Image, BackHandler, Platform, Text } from 'react-native';



const CustomeTextInpute = (props) => {
    return (
        <View>
            <View style={{ paddingVertical: 10 }}>
                <Text>{props.placeholder}</Text>
            </View>
            <View style={{ height: 35 }}>
                <TextInput value={props.value} onChangeText={val => props.onChangeText(val)} placeholder={props.placeholder} style={{ height: 35, borderRadius: 5, borderWidth: 1 }} />
            </View >
        </View>
    )
}

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {

    }

    onPress = () => {
        this.props.navigation.navigate("DataScreen")
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, }}>
                </View>
                <View style={{ flex: 3, paddingHorizontal: 20 }}>

                    <CustomeTextInpute onChangeText={(val) => this.onEnterText('password', val)} placeholder="E-mail Address" />
                    <CustomeTextInpute onChangeText={(val) => this.onEnterText('password', val)} placeholder="Password" />
                    <TouchableOpacity style={{ padding: 10, alignSelf: 'flex-end', marginTop: 10 }}>
                        <Text style={{ alignSelf: "flex-end", color: "green" }} >Forgot password </Text>
                    </TouchableOpacity>

                    <Button onPress={() => this.onPress()} title="Login"></Button>

                </View>

            </View >
        )
    }
}
