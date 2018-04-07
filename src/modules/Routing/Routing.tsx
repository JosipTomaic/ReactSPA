import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoyaltyPage } from 'modules';
import { Page404 } from '../../components';
import { DiscountItemDetailsWrapper } from 'modules/Discounts';
import { Provider } from 'react-redux';
import { configureStore } from '../'

export const Routing = () => {
    return (
        <Provider store={configureStore()}>
            <Router>
                <Switch>
                    <Route exact strict path="/" component={LoyaltyPage} />
                    <Route exact strict path="/discount/:id" component={DiscountItemDetailsWrapper} />
                    <Route component={Page404} />
                </Switch>
            </Router>
        </Provider>
    );
};