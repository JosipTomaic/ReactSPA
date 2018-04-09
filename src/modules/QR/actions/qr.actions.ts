import { QRAction } from './qr.creators';
import { QRActionTypes } from './qr.types';
import { CameraType } from '../enums';
import { AppThunkAction } from 'store';

export const toggleQRCodeReader = (): AppThunkAction<QRAction> => async (dispatch, getState) => {
    if(!getState().qr.isCameraShowing)
        dispatch({ type: QRActionTypes.TOGGLE_QR_CODE_READER, payload: true });
    else
        dispatch({ type: QRActionTypes.TOGGLE_QR_CODE_READER, payload: false });
}

export const toggleCameraType = (): AppThunkAction<QRAction> => async (dispatch, getState) => {
    if(getState().qr.cameraType == CameraType.Environment){
        dispatch({ type: QRActionTypes.TOGGLE_CAMERA_TYPE, payload: CameraType.User });
    }
    else {
        dispatch({ type: QRActionTypes.TOGGLE_CAMERA_TYPE, payload: CameraType.Environment });
    }
}

export const saveScanResult = (result: string): AppThunkAction<QRAction> => async (dispatch, getState) => {
    if(result !== undefined){
        dispatch({ type: QRActionTypes.SAVE_SCAN_RESULT, payload: result});
    }
}