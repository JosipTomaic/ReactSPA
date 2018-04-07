import { GetAllDiscounts, GetSpecificDiscount } from '../../constants';
import { DiscountAction } from './discount.creators';
import { DiscountActionTypes } from './discount.types';
import { AppThunkAction, RedeemedDiscount, saveToLocalStorage } from '../../'
import { LocalStorageKeys } from 'enums/localStorageKeys';

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
    saveToLocalStorage(LocalStorageKeys.RedeemedDiscounts, JSON.stringify(discount));
    dispatch({ type: DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_COMPLETED });
}

export const toggleQRCodeReader = (): AppThunkAction<DiscountAction> => async (dispatch, getState) => {
    if(!getState().discount.isCameraShowing)
        dispatch({ type: DiscountActionTypes.TOGGLE_QR_CODE_READER_START });
    else
        dispatch({ type: DiscountActionTypes.TOGGLE_QR_CODE_READER_COMPLETED });
}

export const toggleSocialShare = (): AppThunkAction<DiscountAction> => async (dispatch, getState) => {
    if(!getState().discount.isSharing)
        dispatch({ type: DiscountActionTypes.TOGGLE_SOCIAL_SHARE_START });
    else
        dispatch({ type: DiscountActionTypes.TOGGLE_SOCIAL_SHARE_COMPLETED });
}