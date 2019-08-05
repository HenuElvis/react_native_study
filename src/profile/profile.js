import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


export default class Profile extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.contentTxt}>Profile</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    contentTxt:{
        textAlign:'center',
        fontSize:60,
    }

});