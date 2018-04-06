import { LoyaltyPoints } from '../model';
import { LoyaltyActionTypes } from './loyalty.types';

export interface FetchLoyaltyPointsRequest {
    type: LoyaltyActionTypes.FETCH_LOYALTY_POINTS_START;
}

export interface SetInitialPointsRequest {
    type: LoyaltyActionTypes.SET_INITIAL_POINTS_START;
}

export interface FetchLoyaltyPointsSuccess {
    type: LoyaltyActionTypes.FETCH_LOYALTY_POINTS_COMPLETED;
    payload: LoyaltyPoints;
}

export interface SetInitialPointsSuccess {
    type: LoyaltyActionTypes.SET_INITIAL_POINTS_COMPLETED;
}

export type LoyaltyAction = FetchLoyaltyPointsRequest | SetInitialPointsRequest | FetchLoyaltyPointsSuccess | SetInitialPointsSuccess;