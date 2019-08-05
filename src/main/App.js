import {createStackNavigator,createAppContainer} from 'react-navigation'
import Home from '../home/home'
import modal from '../modal/modal'
import Profile from '../profile/profile'

const MainStack  = createStackNavigator({
    Home:{
        screen:Home,
    },
    Details:{
        screen:Profile
    },   
},{
    mode: 'card',
    headerMode: 'none',
    initialRouteName:'Home',
    defaultNavigationOptions:{
        title:"NO TITLE",
        headerStyle:{
            backgroundColor:'red'
        },
        headerTintColor:'white',
        headerTintStyle:{
            fontWeight: 'blod'
        }
    }
});

const RootStack = createStackNavigator({

    MainStack:{
        screen:MainStack
    },
    MainModal:{
        screen:modal
    }
},{
    mode: 'card',
    headerMode: 'none',
    defaultNavigationOptions:{
        title:"NO TITLE",
        headerStyle:{
            backgroundColor:'red'
        },
        headerTintColor:'white',
        headerTintStyle:{
            fontWeight: 'blod'
        }
    }
});

const App = createAppContainer(RootStack)

export default App;