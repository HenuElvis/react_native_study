import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'A') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'B') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          <Ionicons name={name} size={size} color={color} />
          { badgeCount > 0 && (
            <View style={{
              // If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
            </View>
          )}
        </View>
      );
    }
  }

const HomeIconWithBadge = (props) => {
// You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
return <IconWithBadge {...props} badgeCount={3} />;  
}
const Tab = createAppContainer(tabNavigator);

export default class TabPage extends React.Component{
    render(){
        return(
            <Tab/>
        );
    }
};
