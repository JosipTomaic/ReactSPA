import { DiscountAction, DiscountActionTypes } from './actions';
import { DiscountState } from './model';

const INITIAL_STATE: DiscountState = {
    discountId: -1,
    isFetching: false,
    isSharing: false,
    discountItems: [],
    discountItem: {
        id: -1,
        name: "",
        image: "",
        regularPrice: -1,
        discountPrice: -1
    },
    isSavingRedeemedDiscount: false
}

export const DiscountReducer = (state = INITIAL_STATE, action: DiscountAction) => {
    switch(action.type){
        case DiscountActionTypes.FETCH_ALL_DISCOUNTS_START:
            return { ...state, isFetching: true};
        case DiscountActionTypes.FETCH_ALL_DISCOUNTS_COMPLETED:
            return { ...state, isFetching: false, discountItems: action.payload};
        case DiscountActionTypes.FETCH_DISCOUNT_BY_ID_START:
            return { ...state, isFetching: true};
        case DiscountActionTypes.FETCH_DISCOUNT_BY_ID_COMPLETED:
            return { ...state, isFetching: false, discountItem: action.payload};
        case DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_START:
            return { ...state, isSavingRedeemedDiscount: true};
        case DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_COMPLETED:
            return { ...state, isSavingRedeemedDiscount: false};
        case DiscountActionTypes.SET_DISCOUNT_ID:
            return { ...state, discountId: action.payload}
        default:
            return state || INITIAL_STATE;
    }
};