import { SocialAction, SocialActionTypes } from './actions';
import { SocialState } from './model';

const INITIAL_STATE: SocialState = {
    isSharing: false
}

export const SocialReducer = (state = INITIAL_STATE, action: SocialAction) => {
    switch(action.type){
        case SocialActionTypes.TOGGLE_SOCIAL_SHARE:
            return { ...state, isSharing: action.payload}
        default:
            return state || INITIAL_STATE;
    }
};