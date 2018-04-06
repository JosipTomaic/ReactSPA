import * as React from 'react';
import { LoyaltyPointsWrapper } from './views';
import { DiscountItemListWrapper } from 'modules/Discounts';

export const LoyaltyPage = () => {
    return (
        <div>
            <LoyaltyPointsWrapper />
            <DiscountItemListWrapper />
        </div>
    );
};