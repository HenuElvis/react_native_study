import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
export default class Home extends React.Component{
    static navigationOptions={
        title:'Home',
        headerTintColor:'#FFFFFF',
        headerStyle:{
            backgroundColor: "#9ecfb8"
        },
        headerTintStyle:{
            fontWeight:'blod'
        }
    }

    render(){

        const navigator = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={{textAlign:'center'}}>Page Home</Text>
                </View>
                <View style={styles.item}>
                    <Button 
                        onPress={()=>{
                            navigator.navigate('List');
                        }}
                        title='go page details'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    item:{
        margin:20
    }

});