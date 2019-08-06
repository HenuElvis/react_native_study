import React from 'react'
import {View,Button ,Text} from 'react-native'

export default class ProductDetails extends React.Component{
    static navigationOptions=({navigation})=>{
        return {
            title:navigation.getParam("data",{key:'default product name'}).key,
            headerTitle:<View><Text style ={{color:'white'}}>HeaderTitle</Text></View>,
            headerRight:<View><Text style ={{color:'white'}}>HeaderRight</Text></View>
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

                <View style={{margin:50}}>
                    <Button 
                        title={'aaa'}
                        onPress={()=>{
                            alert('ceshi');
                        }}
                    ></Button>
                </View>
            </View>
        );
    }
}