import { QRAction } from './qr.creators';
import { QRActionTypes } from './qr.types';
import { AppThunkAction } from '../../'
import { CameraType } from '../enums';

export const toggleQRCodeReader = (): AppThunkAction<QRAction> => async (dispatch, getState) => {
    if(!getState().qr.isCameraShowing)
        dispatch({ type: QRActionTypes.TOGGLE_QR_CODE_READER, payload: true });
    else
        dispatch({ type: QRActionTypes.TOGGLE_QR_CODE_READER, payload: false });
}

export const toggleCameraType = (): AppThunkAction<QRAction> => async (dispatch, getState) => {
    if(getState().qr.cameraType == CameraType.environment){
        dispatch({ type: QRActionTypes.TOGGLE_CAMERA_TYPE, payload: CameraType.environment });
    }
    else {
        dispatch({ type: QRActionTypes.TOGGLE_CAMERA_TYPE, payload: CameraType.user });
    }
}