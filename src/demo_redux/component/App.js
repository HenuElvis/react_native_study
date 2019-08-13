import React from 'react';
import {View,Text} from 'react-native'

export default class App extends  React.Component{

    static navigationOptions=({navigation})=>{
        return {
            title:'Todo'
        }
    }

    render(){
        return (
            <View>
                <Text> todos elvis!</Text>
            </View>
        );
    };

}