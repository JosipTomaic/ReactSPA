import { GetAllDiscounts, GetSpecificDiscount } from '../../constants';
import { DiscountItem } from '../../model';
import { DiscountAction } from './discount.creators';
import { DiscountActionTypes } from './discount.types';

export const fetchDiscountItemsAction = () => (dispatch) => {
    dispatch({ type: DiscountActionTypes.FETCH_ALL_DISCOUNTS_START });
    let discountItems = GetAllDiscounts();
    dispatch({ type: DiscountActionTypes.FETCH_ALL_DISCOUNTS_COMPLETED, payload: discountItems });
}

export const fetchDiscountItemByIdAction = (id: number)=> (dispatch) => {
    dispatch({ type: DiscountActionTypes.FETCH_DISCOUNT_BY_ID_START });
    let discountItem = GetSpecificDiscount(id);
    dispatch({ type: DiscountActionTypes.FETCH_DISCOUNT_BY_ID_COMPLETED, payload: discountItem });
}