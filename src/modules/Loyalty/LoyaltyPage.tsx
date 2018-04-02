import * as React from 'react';
import { LoyaltyPoints } from './views';
import { DiscountItemList } from 'modules/Discounts';

export const LoyaltyPage = () => {
    return (
        <div>
            <LoyaltyPoints />
            <DiscountItemList />
        </div>
    );
};