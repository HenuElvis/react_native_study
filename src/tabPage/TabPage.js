import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'

class A extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text 
                    onPress={
                        ()=>{
                            this.props.navigation.navigate('B')
                        }
                    }
                    style={styles.centerText}>TabA</Text>
            </View>
        );
    }
}
class B extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text 
                    onPress={
                        ()=>{
                            this.props.navigation.navigate('A')
                        }
                    }
                    style={styles.centerText}>TabB</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    centerText:{
        textAlign:'center'
    }
});

const tabNavigator = createBottomTabNavigator({
    A:{
        screen:A
    },
    B:{
        screen:B
    }
});
const Tab = createAppContainer(tabNavigator);

export default class TabPage extends React.Component{
    render(){
        return(
            <Tab/>
        );
    }
};
