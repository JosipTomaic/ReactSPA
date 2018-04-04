import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoyaltyPage } from 'modules';
import { Page404 } from '../../components';
import { DiscountItemDetails } from 'modules/Discounts';

export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact strict path="/" component={LoyaltyPage} />
                <Route exact strict path="/discount/:id" component={DiscountItemDetails} />
                <Route component={Page404} />
            </Switch>
        </Router>
    );
};