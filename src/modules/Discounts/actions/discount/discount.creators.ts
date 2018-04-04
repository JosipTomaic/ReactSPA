import { DiscountItem } from '../../model';
import { DiscountActionTypes } from './discount.types';

export interface FetchDiscountItemsRequest {
    type: DiscountActionTypes.FETCH_ALL_DISCOUNTS_START;
}

export interface FetchDiscountItemRequest {
    type: DiscountActionTypes.FETCH_DISCOUNT_BY_ID_START;
}

export interface FetchDiscountItemsSuccess {
    type: DiscountActionTypes.FETCH_ALL_DISCOUNTS_COMPLETED;
    payload: DiscountItem[];
}

export interface FetchDiscountItemByIdSuccess {
    type: DiscountActionTypes.FETCH_DISCOUNT_BY_ID_COMPLETED;
    payload: DiscountItem;
};

export type DiscountAction = FetchDiscountItemRequest | FetchDiscountItemsRequest | FetchDiscountItemByIdSuccess | FetchDiscountItemsSuccess;