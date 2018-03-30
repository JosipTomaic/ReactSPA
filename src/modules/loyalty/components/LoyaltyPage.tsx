import * as React from 'react';
import { LoyaltyPoints } from '../loyalty_points';
import { Discounts } from 'modules';

export const LoyaltyPage = () => {
    return (
        <div>
            <LoyaltyPoints />
            <Discounts />
        </div>
    );
};