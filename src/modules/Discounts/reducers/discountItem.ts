import { actionTypes } from '../constants';
import { DiscountItem } from '../model';

const createEmptyDiscountItem = (): DiscountItem => ({
    id: -1,
    image: '',
    name: '',
    discountPrice: -1,
    regularPrice: -1
});

export const discountItemReducer = (state = createEmptyDiscountItem(), action) => {
    switch(action.type){
        case actionTypes.FETCH_DISCOUNT_BY_ID_COMPLETED:
            return handleFetchDiscountByIdCompleted(state, action.payload);
    }
    return state;
}

const handleFetchDiscountByIdCompleted = (state: DiscountItem, payload: DiscountItem): DiscountItem => {
    return payload;
};