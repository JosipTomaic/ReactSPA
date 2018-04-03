import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { LoyaltyPage, Page404 } from 'modules';
import { DiscountItemDetails } from 'modules/Discounts';

export const Routing = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact strict path="/" component={LoyaltyPage} />
                    <Route exact strict path="/discount/:id" component={DiscountItemDetails} />
                    <Route exact strict path="*" component={Page404} />
                </Switch>
            </Router>
        </Provider>
    );
};