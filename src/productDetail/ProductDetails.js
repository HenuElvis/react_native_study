import React from 'react'
import {View ,Text} from 'react-native'

export default class ProductDetails extends React.Component{
    static navigationOptions=({navigation})=>{
        return {
            title:navigation.getParam("data",{key:'default product name'}).key
        };
    }
    render(){
        const item = this.props.navigation.getParam("data",{key:'default product name'});

        return(
            <View style = {{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text style={{textAlign:'center'}} 
                    onPress={()=>{
                        this.props.navigation.setParams({data:{
                            key:''+Math.round(Math.random()*10)
                        }});
                    }}
                >parm:{item.key};点击更换title</Text>
            </View>
        );
    }
}