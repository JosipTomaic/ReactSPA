import { actionTypes } from '../constants';
import { DiscountItem } from '../model';

export const discountItemsReducer = (state: DiscountItem[] = [], action) => {
    switch(action.type){
        case actionTypes.FETCH_ALL_DISCOUNTS_COMPLETED:
            return handleFetchAllDiscountsCompleted(state, action.payload);
    }
    return state;
}

const handleFetchAllDiscountsCompleted = (state: DiscountItem[], payload: DiscountItem[]) => {
    return payload;
};