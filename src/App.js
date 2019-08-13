import {createAppContainer,createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator}from 'react-navigation';
import Home from './main/Home'
import ProductList from './productList/ProductList'
import ProductDetails from './productDetail/ProductDetails'
import FullScreen from './fullScreen/fullScreen'
import TabPage from './tabPage/TabPage'
import Todo from './demo_redux/component/App'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Iconicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Platform } from 'react-native';

const AppTopNavigator = createMaterialTopTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'All'
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'IOS'
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'React'
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            tabBarLabel:'React Native'
        }
    },
    Page5:{
        screen:Page5,
        navigationOptions:{
            tabBarLabel:'Devio'
        }
    }
},{
    tabBarOptions:{
       tabStyle:{
           mindWidth:50
       } ,
       upperCaseLabel:false,//是否支持标签大写
       scrollEnabled:true,//是否支持选项卡滑动
       style:{
           backgroundColor:'#678'//TabBar背景色
       },
       indicatorStyle:{
           height:2,
           backgroundColor:'white'
       },//标签指示器的颜色
       labelStyle:{
           fontSize:13,
           marginTop:6,
           marginBottom:6
       }
    }
}
);
const AppBottomNavigator = createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon:({tintColor,focused})=>(
                <Iconicons 
                    name={'ios-home'}
                    size={26}
                    style={{ color:tintColor}} 
                />     
            )
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({tintColor,focused})=>(
                <Iconicons 
                    name={'ios-people'}
                    size={26}
                    style={{ color:tintColor}} 
                />     
            )
    }
},
    Page3:{
        screen:Page3,
        navigationOptions:{ 
            tabBarLabel:'收藏',
            tabBarIcon:({tintColor,focused})=>(
                <Iconicons 
                    name={'ios-chatboxes'}
                    size={26}
                    style={{ color:tintColor}} 
                />     
            )
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:{ 
            tabBarLabel:'我的',
            tabBarIcon:({tintColor,focused})=>(
                <Iconicons 
                    name={'ios-analytics'}
                    size={26}
                    style={{ color:tintColor}} 
                />     
            )
        }
    }
},{
    tabBarOptions:{
        activeTintColor:Platform.OS ==='ios'?'#fff':'#e91e63',
    }
});

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
    Todo:{
        screen:Todo
    }
   
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
    TabPage:{
        screen:TabPage
    },
    Bottom:{
        screen:AppBottomNavigator
    },
    Top:{
        screen:AppTopNavigator
    }
}, {
    initialRouteName:'AppBarStack',
    mode: 'modal',
    headerMode: 'none',
  }
);

const App = createAppContainer(AppNavigator);

export default App;


