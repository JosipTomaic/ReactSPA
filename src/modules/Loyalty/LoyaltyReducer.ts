import { LoyaltyAction, LoyaltyActionTypes } from './actions';
import { LoyaltyState } from './model';

const INITIAL_STATE: LoyaltyState = {
    isFetching: false,
    isInitialSet: false,
    isSettingInitial: false,
    loyaltyPoints: 0
}

export const LoyaltyReducer = (state = INITIAL_STATE, action: LoyaltyAction) => {
    switch(action.type){
        case LoyaltyActionTypes.SET_INITIAL_POINTS_START:
            return { ...state, isSettingInitial: true};
        case LoyaltyActionTypes.SET_INITIAL_POINTS_COMPLETED:
            return { ...state, isSettingInitial: false, isInitialSet: true};
        case LoyaltyActionTypes.FETCH_LOYALTY_POINTS_START:
            return { ...state, isFetching: true};
        case LoyaltyActionTypes.FETCH_LOYALTY_POINTS_COMPLETED:
            return { ...state, isFetching: false, loyaltyPoints: action.payload};
        default:
            return state || INITIAL_STATE;
    }
};