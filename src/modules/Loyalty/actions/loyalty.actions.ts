import { LoyaltyAction } from './loyalty.creators';
import { LoyaltyActionTypes } from './loyalty.types';
import { LocalStorageKeys } from 'enums';
import { AppThunkAction } from 'store';

export const setInitialLoyaltyPointsAction = (): AppThunkAction<LoyaltyAction> => async (dispatch, getState) => {
    if(localStorage.getItem(LocalStorageKeys.LoyaltyPoints) === null){
        dispatch({ type: LoyaltyActionTypes.SET_INITIAL_POINTS_START });
        await localStorage.setItem(LocalStorageKeys.LoyaltyPoints, JSON.stringify({ points: 0, initialState: true }));
        dispatch({ type: LoyaltyActionTypes.SET_INITIAL_POINTS_COMPLETED });
    }
}

export const fetchLoyaltyPointsAction = (): AppThunkAction<LoyaltyAction> => async (dispatch, getState) => {
    dispatch({ type: LoyaltyActionTypes.FETCH_LOYALTY_POINTS_START });
    let currentPoints = await localStorage.getItem(LocalStorageKeys.LoyaltyPoints);
    let loyaltyPoints = JSON.parse(currentPoints ? currentPoints : '{}').points;
    dispatch({ type: LoyaltyActionTypes.FETCH_LOYALTY_POINTS_COMPLETED, payload: loyaltyPoints });
}