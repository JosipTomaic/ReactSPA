import { DiscountItem } from ".";

export interface DiscountState{
    isFetching: boolean;
    discountItems: DiscountItem[];
    discountItem: DiscountItem;
    isCameraShowing: boolean;
    isSharing: boolean;
    isSavingRedeemedDiscount: boolean;
}