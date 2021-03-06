import { QRActionTypes } from './qr.types';

export interface ToggleQRCodeReader {
    type: QRActionTypes.TOGGLE_QR_CODE_READER;
    payload: boolean;
}

export interface ToggleCameraType {
    type: QRActionTypes.TOGGLE_CAMERA_TYPE;
    payload: string;
}

export interface SaveScanResult {
    type: QRActionTypes.SAVE_SCAN_RESULT;
    payload: string;
}

export type QRAction = ToggleQRCodeReader | ToggleCameraType | SaveScanResult;