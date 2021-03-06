import React from 'react'
import {View,Text,FlatList,StyleSheet,TouchableWithoutFeedback} from 'react-native'

export default class ProductList  extends React.Component{
    static navigationOptions={
        title:'List'
    }
    render(){
       return(
        <View style={styles.container}>
            <FlatList
                data={
                    [
                        {key:'哪吒'},{key:'申公豹'},{key:'太乙真人'},{key:'通天教主'},{key:'萧炎'},{key:'药老'},{key:'萧薰儿'}
                    ]
                }
                renderItem={
                    ({item})=>{
                        return (
                            <View style={styles.item}>
                                <TouchableWithoutFeedback 
                                        onPress={
                                            ()=>{
                                                this.props.navigation.navigate('Details',{data:item});
                                            }
                                        }
                                    >
                                    <Text style={styles.text} >{item.key}</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        );
                    }
                }
            
            ></FlatList>

        </View>
       );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item:{
        backgroundColor:'pink',
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        textAlign:'center'
    },
});