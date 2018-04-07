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

export interface SaveRedeemedDiscountRequest {
    type: DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_START;
}

export interface SaveRedeemedDiscountSuccess {
    type: DiscountActionTypes.SAVE_REDEEMED_DISCOUNT_COMPLETED;
}

export interface ToggleQRCodeReaderRequest {
    type: DiscountActionTypes.TOGGLE_QR_CODE_READER_START;
}

export interface ToggleQRCodeReaderSuccess {
    type: DiscountActionTypes.TOGGLE_QR_CODE_READER_COMPLETED;
}

export interface ToggleSocialShareRequest {
    type: DiscountActionTypes.TOGGLE_SOCIAL_SHARE_START;
}

export interface ToggleSocialShareSuccess {
    type: DiscountActionTypes.TOGGLE_SOCIAL_SHARE_COMPLETED;
}

export type DiscountAction = FetchDiscountItemRequest | 
    FetchDiscountItemsRequest |
    SaveRedeemedDiscountRequest |
    ToggleQRCodeReaderRequest | 
    ToggleSocialShareRequest | 
    FetchDiscountItemByIdSuccess | 
    FetchDiscountItemsSuccess |
    SaveRedeemedDiscountSuccess |
    ToggleQRCodeReaderSuccess | 
    ToggleSocialShareSuccess;