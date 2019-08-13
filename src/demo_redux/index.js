import React from 'react';
import Provider from 'react-redux';
import reducers from './reducers/reducers';
import {createStore} from 'redux';
import App from './component/App';

const store = createStore(reducers);

export default class ReduxDemo extends React.Component{
 
    render(){
        return(
            <Provider store = {store}>
                <App></App>
            </Provider>
        );
    }


}