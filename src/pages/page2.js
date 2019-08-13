import React from 'react';
import {View,Text,StatusBar} from 'react-native';

export default class Page2 extends React.Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View><StatusBar barStyle="light-content" /></View>
                <Text>Page2</Text>
            </View>
        );
    }
}