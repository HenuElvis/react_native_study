import {createAppContainer,createStackNavigator}from 'react-navigation';
import Home from './main/Home'
import ProductList from './productList/ProductList'
import ProductDetails from './productDetail/ProductDetails'
import FullScreen from './fullScreen/fullScreen'


const AppBarStack = createStackNavigator({
    List:{
        screen:ProductList
    },
    Home:{
        screen:Home
    },
    Details:{
        screen:ProductDetails
    },
  
},{
    initialRouteName:'Home',
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
});

const AppNavigator = createStackNavigator({
    AppBarStack:{
        screen:AppBarStack
    },
    FullScreen:{
        screen:FullScreen
    },
}, {
    initialRouteName:'AppBarStack',
    mode: 'modal',
    headerMode: 'none',
  }
);

const App = createAppContainer(AppNavigator);

export default App;


