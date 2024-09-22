import React from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App.tsx'
import About from './routers/About.tsx';
import Contact from './routers/Contact.tsx';
import Contacts from './routers/Contacts.tsx';
import Error404 from './routers/Error404.tsx';
import Home from './routers/Home.tsx'


function AppRoutes() {
    return (
        <App>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path='/contact' component={Contact} exact/>
                <Route path='/contacts' component={Contacts} exact/>
                <Route path='/contacts/:contactId' component={Contacts} exact />
                <Route component={Error404} />
            </Switch>
        </App>
    );
}

export default AppRoutes;