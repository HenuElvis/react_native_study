import React from 'react'
import {View,Button,StyleSheet} from 'react-native'


export default class Home extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                 <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                    />
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