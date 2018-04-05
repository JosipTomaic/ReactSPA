import { DiscountState, LoyaltyState } from 'modules';
import { combineReducers, Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface ApplicationState {
    discount: DiscountState;
    loyalty: LoyaltyState;
}

export const allReducers = {
    discount: DiscountReducer,
    loyalty: LoyaltyReducer
};

export interface AppThunkAction<TAction> {
    dispatch: (action: TAction) => void;
    getState: () => ApplicationState;
}

export const configureStore = () => {

    const rootReducer = combineReducers<ApplicationState>(Object.assign({}, allReducers))

    const store: Store<ApplicationState> = createStore(rootReducer, compose(applyMiddleware(thunk)));

    return store;
};