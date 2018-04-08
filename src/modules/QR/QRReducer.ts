import { QRAction, QRActionTypes } from './actions';
import { QRState } from './model';

const INITIAL_STATE: QRState = {
    isCameraShowing: false,
    cameraType: 'environment',
    result: ''
}

export const QRReducer = (state = INITIAL_STATE, action: QRAction) => {
    switch(action.type){
        case QRActionTypes.TOGGLE_QR_CODE_READER:
            return { ...state, isCameraShowing: action.payload }
        case QRActionTypes.TOGGLE_CAMERA_TYPE:
            return { ...state, cameraType: action.payload };
        case QRActionTypes.SAVE_SCAN_RESULT:
            return { ...state, result: action.payload };
        default:
            return state || INITIAL_STATE;
    }
};