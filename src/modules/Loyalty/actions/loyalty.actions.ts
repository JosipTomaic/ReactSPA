import { LoyaltyAction } from './loyalty.creators';
import { LoyaltyActionTypes } from './loyalty.types';
import { AppThunkAction } from '../../'

export const setInitialLoyaltyPointsAction = (): AppThunkAction<LoyaltyAction> => async (dispatch, getState) => {
    if(!localStorage.getItem('points')){
        dispatch({ type: LoyaltyActionTypes.SET_INITIAL_POINTS_START });
        await localStorage.setItem('points', JSON.stringify({ points: 0, initialState: true }));
        dispatch({ type: LoyaltyActionTypes.SET_INITIAL_POINTS_COMPLETED });
    }
}

export const fetchLoyaltyPointsAction = (): AppThunkAction<LoyaltyAction> => async (dispatch, getState) => {
    dispatch({ type: LoyaltyActionTypes.FETCH_LOYALTY_POINTS_START });
    let currentPoints = await localStorage.getItem('points');
    let loyaltyPoints = JSON.parse(currentPoints ? currentPoints : '{}').points;
    dispatch({ type: LoyaltyActionTypes.FETCH_LOYALTY_POINTS_COMPLETED, payload: loyaltyPoints });
}