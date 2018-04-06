import * as React from 'react';
import { LoyaltyPoints } from './views';
import { DiscountItemListWrapper } from 'modules/Discounts';

export const LoyaltyPage = () => {
    return (
        <div>
            <LoyaltyPoints />
            <DiscountItemListWrapper />
        </div>
    );
};