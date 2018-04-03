import * as React from 'react';
import { LoyaltyPoints } from './views';
import { DiscountItemListContainer } from 'modules/Discounts';

export const LoyaltyPage = () => {
    return (
        <div>
            <LoyaltyPoints />
            <DiscountItemListContainer />
        </div>
    );
};