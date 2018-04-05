import { RedeemedDiscount } from '.'

export interface LoyaltyState {
    loyaltyPoints: number;
    redeemedDiscounts: RedeemedDiscount[];
    isInitialSet: boolean;
}