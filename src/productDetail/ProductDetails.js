import React from 'react'
import {View,Button ,Text} from 'react-native'

export default class ProductDetails extends React.Component{

    static navigationOptions=({navigation})=>{
        return {
            title:navigation.getParam("data",{key:'default product name'}).key,
            // headerTitle:<View><Text style ={{color:'white'}}>HeaderTitle</Text></View>,
            headerRight:<View style={{marginRight:20}}><Text style ={{color:'yellow',fontSize:18}} onPress={navigation.getParam('increment')}>increment</Text></View>
        };
    }

    state={
        count:0
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
                   <Text style={{textAlign:'center'}}>count:{this.state.count}</Text>
                </View>
            </View>
        );
    }

    componentDidMount(){
        const {navigation} = this.props;
        navigation.setParams({
            increment:this.increment
        });
    }

    increment = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
}