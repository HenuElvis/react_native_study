import React from 'react';
import {View,Text,StatusBar} from 'react-native';

export default class FullScreen extends React.Component{
    static navigationOptions = {
        title:"FullScreen",
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View><StatusBar barStyle="light-content" /></View>
                <Text>FullScreen Page</Text>
            </View>
        );
    }
}