import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './views/Home';
import OurTeam from './views/OurTeam';
import Mission from './views/Mission';
import NoMatch from './views/NoMatch';
import Contact from './views/Contact';
import Application from './views/Application.js';
import Membership from './views/Membership.js';
import GetInvolved from './views/GetInvolved.js';

import Burlington from './views/houses/Burlington';
import Essex from './views/houses/Essex';
import SaintAlbans from './views/houses/SaintAlbans';
import SouthBurlington from './views/houses/SouthBurlington';

import Header from './components/Header';
import Footer from './components/Footer';


export const Routes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/'>
                    <Redirect to='/Home' />
                </Route>
                <Route exact path='/OurTeam' component={OurTeam} />
                <Route exact path='/Mission' component={Mission} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/GetInvolved' component={GetInvolved} />
                <Route exact path='/Application' component={Application} />
                <Route exact path='/Membership' component={Membership} />
                <Route exact path='/houses/burlington' component={Burlington} />
                <Route exact path='/houses/essex' component={Essex} />
                <Route exact path='/houses/saintalbans' component={SaintAlbans} />
                <Route exact path='/houses/southburlington' component={SouthBurlington} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
        </div>
    );
};