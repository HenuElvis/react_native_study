import React from 'react'
import {View ,Text} from 'react-native'

export default class ProductDetails extends React.Component{

    render(){
        const item = this.props.navigation.getParam("data",{key:'default product name'});

        return(
            <View style = {{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text style={{textAlign:'center'}}>{item.key}</Text>
            </View>
        );
    }
}