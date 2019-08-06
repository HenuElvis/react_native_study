import {createAppContainer,createStackNavigator}from 'react-navigation';
import Home from './main/Home'
import ProductList from './productList/ProductList'
import ProductDetails from './productDetail/ProductDetails'

const AppNavigator = createStackNavigator({
    Home:Home,
    Details:ProductDetails,
    List:ProductList
});

const App = createAppContainer(AppNavigator);

export default App;


