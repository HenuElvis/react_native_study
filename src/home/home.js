import React from 'react'
import {View,Button,StyleSheet} from 'react-native'


export default class Home extends React.Component{

    static navigationOptions = {
        title: 'Home',
        headerStyle:{
            backgroundColor: '#f4511e'
        },
        headerTintColor:'#fff',
        headerTintStyle:{
            fontWeight: 'blod'
        },

    };

    render(){
        const {navigate} = this.props.navigation;

        const params = {
            id:1238,
        }
        return (
            <View style={styles.container}>
                 <Button
                    title="Details page"
                    onPress={() => navigate('Details', params)}
                    />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        padding:50,
        flex:1
    },
    contentTxt:{
        textAlign:'center',
        fontSize:60,
    }
});