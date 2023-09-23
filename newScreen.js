import React, { Component, } from 'react'
import { Image, View, Text } from 'react-native'

export default class newScreen extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        }).then((Response) => Response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ data: responseJson })
            }).catch((error) => {
                console.log(error);
            })
    }
    render() {

        return (
            <View >
                <Text style={{ margin: 10, fontSize: 13, color: 'black' }}>Title: {this.state.data.title}</Text>
                <Text style={{ margin: 10, fontSize: 15 }}>Body: {this.state.data.body}</Text>

            </View>
        )
    }
}

