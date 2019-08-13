import React from 'react';
import {View,Text,Button,StyleSheet,ScrollView} from 'react-native';
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
                <ScrollView>
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
                    <View style={styles.item}>
                        <Button 
                            onPress={()=>{
                                navigator.navigate('FullScreen');
                            }}
                            title='go page FullScreen'
                        />
                    </View>
                    <View style={styles.item}>
                        <Button 
                            onPress={()=>{
                                navigator.navigate('TabPage');
                            }}
                            title='go page TabPage'
                        />
                    </View>
                    <View style={styles.item}>
                        <Button 
                            onPress={()=>{
                                navigator.navigate('Todo');
                            }}
                            title='go page TODO'
                        />
                    </View>

                    <View style={styles.item}>
                        <Button 
                            onPress={()=>{
                                navigator.navigate('Bottom');
                            }}
                            title='go page Bottom'
                        />
                    </View>
                    
                    <View style={styles.item}>
                        <Button 
                            onPress={()=>{
                                navigator.navigate('Top');
                            }}
                            title='go page TopBar'
                        />
                    </View>
                </ScrollView>
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