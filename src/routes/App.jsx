import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import RecoveryPass from '@pages/RecoveryPass';
import CreateNewPass from '@pages/CreateNewPass';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';


import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value= {initialState} >
        <BrowserRouter>
        <Layout>
        <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/create-new-pass" component = { CreateNewPass} />
                <Route exact path = "/recovery-pass" component = { RecoveryPass } />
                <Route exact path = "/account" component = {MyAccount} />
                <Route exact path = "/signup" component = {CreateAccount} />
                <Route path = "*" component = { NotFound } />
        </Switch>
        </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;