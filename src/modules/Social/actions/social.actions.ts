import { SocialAction } from './social.creators';
import { SocialActionTypes } from './social.types';
import { AppThunkAction } from 'store';

export const toggleSocialShare = (): AppThunkAction<SocialAction> => async (dispatch, getState) => {
    if(!getState().social.isSharing)
        dispatch({ type: SocialActionTypes.TOGGLE_SOCIAL_SHARE, payload: true });
    else
        dispatch({ type: SocialActionTypes.TOGGLE_SOCIAL_SHARE, payload: false });
}