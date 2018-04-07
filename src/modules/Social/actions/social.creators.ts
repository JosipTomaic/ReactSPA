import { SocialActionTypes } from './social.types';

export interface ToggleSocialShare {
    type: SocialActionTypes.TOGGLE_SOCIAL_SHARE;
    payload: boolean;
}

export type SocialAction = ToggleSocialShare;