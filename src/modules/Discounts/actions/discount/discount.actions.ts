import { DiscountAction } from './discount.creators';
import { DiscountActionTypes } from './discount.types';
import { LocalStorageKeys } from 'enums/localStorageKeys';
import { AppThunkAction } from 'store';
import { GetSpecificDiscount, GetAllDiscounts } from 'modules/Discounts';
import { RedeemedDiscount } from 'modules';
import { getFromLocalStorage, saveToLocalStorage } from 'services';

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

export const saveRedeemedDiscount = (discount: RedeemedDiscount): AppThunkAction<DiscountAction> => async (dispatch, getState) => {
    dispatch({ type: DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_START });
    let redeemedDiscounts = new Array<RedeemedDiscount>();
    if(getFromLocalStorage(LocalStorageKeys.RedeemedDiscounts) !== null){
        var currentRedeemedDiscounts = getFromLocalStorage(LocalStorageKeys.RedeemedDiscounts);
        redeemedDiscounts = JSON.parse(currentRedeemedDiscounts || '{}');
    }
    redeemedDiscounts.push(discount);
    saveToLocalStorage(LocalStorageKeys.RedeemedDiscounts, JSON.stringify(redeemedDiscounts));
    dispatch({ type: DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_COMPLETED });
}

export const setDiscountId = (id: number): AppThunkAction<DiscountAction> => async (dispatch, getState) => {
    if(id != undefined){
        dispatch({ type: DiscountActionTypes.SET_DISCOUNT_ID, payload: id});
    }
}