import { combineReducers } from 'redux';
import { DiscountItem } from '../model';
import { discountItemReducer } from './discountItem';
import { discountItemsReducer } from './discountItems';

export interface State {
    discountItem: DiscountItem;
    discountItems: DiscountItem[];
};

export const state = combineReducers<State>({
    discountItem: discountItemReducer,
    discountItems: discountItemsReducer
});