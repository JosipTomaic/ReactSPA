import { DiscountItem } from ".";

export interface DiscountState{
    isFetching: boolean;
    discountItems: DiscountItem[];
    isCameraShowing: boolean;
    isSharing: boolean;
}