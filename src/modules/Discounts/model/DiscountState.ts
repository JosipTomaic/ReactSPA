import { DiscountItem } from ".";

export interface DiscountState{
    isFetching: boolean;
    discountItems: DiscountItem[];
    discountItem: DiscountItem;
    isSharing: boolean;
    isSavingRedeemedDiscount: boolean;
}