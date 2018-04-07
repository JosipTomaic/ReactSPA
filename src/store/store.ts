import { DiscountState, LoyaltyState, DiscountReducer, LoyaltyReducer, QRReducer, QRState, SocialState, SocialReducer } from 'modules';
import { combineReducers, Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface ApplicationState {
    discount: DiscountState;
    loyalty: LoyaltyState;
    qr: QRState;
    social: SocialState;
}

export const allReducers = {
    discount: DiscountReducer,
    loyalty: LoyaltyReducer,
    qr: QRReducer,
    social: SocialReducer
};

export interface AppThunkAction<TAction> {
    (
        dispatch: (action: TAction) => void,
        getState: () => ApplicationState
    ): void;
}

export const configureStore = () => {

    const rootReducer = combineReducers<ApplicationState>(Object.assign({}, allReducers))

    const store: Store<ApplicationState> = createStore(rootReducer, compose(applyMiddleware(thunk)));

    return store;
};