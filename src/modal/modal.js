import React from 'react'
import {View,Button,Text,StyleSheet} from 'react-native'


export default class Modal extends React.Component{
    static navigationOptions = ({navigation})=>{
        return {
            title:navigation.getParam("noParam","Modal"),
            headerStyle:{
                backgroundColor:'#f4511e'
            },
            headerTintColor:'white',
            headerTintStyle:{
                fontWeight: 'blod'
            },
            headerRight: (
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white',marginRight:20,fontSize:16}} onPress={() => alert('This is a OptionsA!')}>OptionsA</Text>
                    <Text style={{color:'white',marginRight:20,fontSize:16}} onPress={() => alert('This is a OptionsB!')}>OptionsB</Text>
                </View>
              ),
        }
    }
    render(){
        const { navigation } = this.props;
        const id = navigation.getParam("id",1);
        const otherData = navigation.getParam("otherData","default other data");

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Text>{id};{otherData}</Text>
                <Button
                    style={styles.margins}
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    style={styles.margins}
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    style={styles.margins}
                    title="reset param"
                    onPress={() => this.props.navigation.setParams({"noParam":"风眠"})}
                />
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    
    margins:{
        marginTop:10
    }
});