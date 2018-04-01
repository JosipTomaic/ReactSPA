import * as React from 'react';
import { LoyaltyPoints } from '../loyalty_points';
import { DiscountItemList } from 'modules/Discounts';

export const LoyaltyPage = () => {
    return (
        <div>
            <LoyaltyPoints />
            <DiscountItemList />
        </div>
    );
};