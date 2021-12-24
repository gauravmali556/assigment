import React from 'react'
import { ImageBackground, View, TextInput, TouchableOpacity, Button, Image, BackHandler, Platform, Text } from 'react-native';



const CustomeTextInput = props => {
    return (
        <View style={{ paddingHorizontal: 10, marginVertical: 5, backgroundColor: "gainsboro" }}>
            <View style={{ paddingHorizontal: 2 }}>
                <Text style={{ fontWeight: 'bold' }}>{props.placeholder}</Text>
            </View>
            <View style={{ height: 30 }}>
                <TextInput secureTextEntry={props.secureTextEntry} value={props.value} onChangeText={val => props.onChangeText(val)} style={{ height: 30, padding: 0 }} />
            </View >
        </View>
    )
}

export default CustomeTextInput;