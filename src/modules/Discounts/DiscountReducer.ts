import { DiscountAction, DiscountActionTypes } from './actions';
import { DiscountState } from './model';

const INITIAL_STATE: DiscountState = {
    isFetching: false,
    isCameraShowing: false,
    isSharing: false,
    discountItems: []
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
            return { ...state, isFetching: false, discountItems: action.payload};
        default:
            return state || INITIAL_STATE;
    }
};