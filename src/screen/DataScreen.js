import React from 'react'
import { ImageBackground, ScrollView, View, RefreshControl, TextInput, TouchableOpacity, Button, Image, BackHandler, Platform, Text } from 'react-native';

const CustomeView = (props) => {
    return (
        <View style={{ backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>#{props.data.id}</Text>
                <View style={{ flexDirection: 'row', backgroundColor: props.data.status == "active" ? "white" : "black", borderWidth: 1, height: 20, width: 20, borderRadius: 1000 }}>
                </View>
            </View>
            <Text style={{ fontSize: 20 }}>{props.data.name}</Text>
            <Text style={{ fontSize: 14 }}>{props.data.email}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Gender:   <Text>{props.data.gender}</Text></Text>
                <Text>Status:   <Text style={{ color: props.data.status == "active" ? "green" : "red" }}>{props.data.status}</Text></Text>
            </View>
        </View>
    )
}

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        this.setState({ data: [] }, () => this.getData())
    }

    /**
  *  #### API Call ###
  * 
  */
    getData = () => {
        fetch("https://gorest.co.in/public/v1/users")
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.data })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    onRefresh = () => {
        this.setState({ refreshing: false, data: [], }, () => { this.getData() })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

                <View style={{ paddingHorizontal: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}>

                        {
                            this.state.data.map((item, key) => {
                                return (
                                    < CustomeView data={item} />
                                )
                            })

                        }

                    </ScrollView>
                </View>

            </View >
        )
    }
}
