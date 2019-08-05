import {createStackNavigator,createAppContainer} from 'react-navigation'
import Home from '../home/home'
import Profile from '../profile/profile'

const MainNavigator = createStackNavigator({
    Home:{
        screen:Home
    },
    Profile:{
        screen:Profile
    }
});

const App = createAppContainer(MainNavigator)

export default App;