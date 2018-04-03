import { actionTypes, GetAllDiscounts, GetSpecificDiscount } from '../constants';
import { DiscountItem } from '../model';

export const fetchDiscountItemsAction = () => (dispatch) => {
    let discountItems = GetAllDiscounts();
    dispatch(fetchDiscountItemsCompleted(discountItems));
}

const fetchDiscountItemsCompleted = (discountItems: DiscountItem[]) => ({
    type: actionTypes.FETCH_ALL_DISCOUNTS_COMPLETED,
    payload: discountItems
});

export const fetchDiscountItemByIdAction = (id: number) => (dispatch) => {
    let discountItem = GetSpecificDiscount(id);
    dispatch(fetchDiscountItemByIdCompleted(discountItem));
}

const fetchDiscountItemByIdCompleted = (discountItem: DiscountItem) => ({
    type: actionTypes.FETCH_DISCOUNT_BY_ID_COMPLETED,
    payload: discountItem
});