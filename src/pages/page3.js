import React from 'react';
import {View,Text,StatusBar} from 'react-native';

export default class Page3 extends React.Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View><StatusBar barStyle="light-content" /></View>
                <Text>Page3</Text>
            </View>
        );
    }
}