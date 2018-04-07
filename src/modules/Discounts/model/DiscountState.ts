import { DiscountItem } from ".";

export interface DiscountState{
    discountId: number;
    isFetching: boolean;
    discountItems: DiscountItem[];
    discountItem: DiscountItem;
    isSharing: boolean;
    isSavingRedeemedDiscount: boolean;
}