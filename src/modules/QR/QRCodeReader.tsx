import * as React from 'react';
import QrReader from 'react-qr-reader';
import { Button } from 'react-bootstrap';
import { ResultText, CameraSettings } from './enums';
import { ApplicationState } from 'store';
import { toggleQRCodeReader, toggleCameraType, saveScanResult } from './actions';
import { connect } from 'react-redux';
import { toggleSocialShare } from 'modules';

const mapStateToProps = (state: ApplicationState) => ({
    isSharing: state.social.isSharing,
    cameraType: state.qr.cameraType,
    result: state.qr.result
});

const mapDispatchToProps = (dispatch) => ({
    toggleSocialShare: () => dispatch(toggleSocialShare()),
    toggleQRCodeReader: () => dispatch(toggleQRCodeReader()),
    toggleCameraType: () => dispatch(toggleCameraType()),
    saveScanResult: (result: string) => dispatch(saveScanResult(result))
});

interface QRCodeReaderProps {
    isSharing: boolean;
    cameraType: string;
    result: string;
    toggleSocialShare(): void;
    toggleQRCodeReader(): void;
    toggleCameraType(): void;
    saveScanResult(result: string): void;
}

class QRCodeReader extends React.Component<QRCodeReaderProps, {}> {
    
    componentDidMount(){
        this.props.saveScanResult(ResultText.noResult);
    }
    
    handleScan = (data) => {
        if (data) {
            this.props.saveScanResult(data);
        }
    }

    closeQRCodeReader = () => {
        this.props.toggleQRCodeReader();
    }

    openSharingModal = () => {
        this.props.toggleSocialShare();
    }

    handleError = (err) => {
        // dispachiraj poruku da se dogodila pogreska...
    }

    changeCamera = () => {
        this.props.toggleCameraType();
    }

    render() {
        return (
            <div>
                <QrReader
                    delay={CameraSettings.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode={this.props.cameraType}
                    style={{ width: '100%', align: 'center' }}
                />
                <p>{this.props.result}</p>
                <Button onClick={this.closeQRCodeReader}>Close QR Code Reader</Button>
                <Button onClick={this.changeCamera}>Change camera</Button>
                <Button disabled={this.props.result === ResultText.noResult} onClick={this.openSharingModal}>
                    Redeem discount
            </Button>
            </div>
        );
    }
}

export const QRCodeReaderWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(QRCodeReader);