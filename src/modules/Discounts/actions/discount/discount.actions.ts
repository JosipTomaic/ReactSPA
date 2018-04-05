import { GetAllDiscounts, GetSpecificDiscount } from '../../constants';
import { DiscountAction } from './discount.creators';
import { DiscountActionTypes } from './discount.types';
import { AppThunkAction } from '../../'

export const fetchDiscountItemsAction = (): AppThunkAction<DiscountAction> => async (dispatch, getState) => {
    dispatch({ type: DiscountActionTypes.FETCH_ALL_DISCOUNTS_START });
    let discountItems = await GetAllDiscounts();
    dispatch({ type: DiscountActionTypes.FETCH_ALL_DISCOUNTS_COMPLETED, payload: discountItems });
}

export const fetchDiscountItemByIdAction = (id: number): AppThunkAction<DiscountAction> => async (dispatch, getState) => {
    dispatch({ type: DiscountActionTypes.FETCH_DISCOUNT_BY_ID_START });
    let discountItem = await GetSpecificDiscount(id);
    dispatch({ type: DiscountActionTypes.FETCH_DISCOUNT_BY_ID_COMPLETED, payload: discountItem });
}