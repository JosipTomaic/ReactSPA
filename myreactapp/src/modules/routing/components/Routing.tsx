import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoyaltyPage } from 'modules';
import { DiscountDetails } from 'modules/discounts';

export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact strict path="/" component={LoyaltyPage} />
                <Route exact strict path="/discount/:id" component={DiscountDetails} />
            </Switch>
        </Router>
    );
};