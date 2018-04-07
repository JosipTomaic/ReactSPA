import * as React from 'react';
import QrReader from 'react-qr-reader';
import { Button } from 'react-bootstrap';
import { ResultText, CameraSettings } from './enums';
import { ApplicationState } from 'store';
import { toggleSocialShare, toggleQRCodeReader, toggleCameraType } from 'modules';
import { connect } from 'react-redux';

const mapStateToProps = (state: ApplicationState) => ({
    isSharing: state.social.isSharing,
    cameraType: state.qr.cameraType
});

const mapDispatchToProps = (dispatch) => ({
    toggleSocialShare: () => dispatch(toggleSocialShare()),
    toggleQRCodeReader: () => dispatch(toggleQRCodeReader()),
    toggleCameraType: () => dispatch(toggleCameraType())
});

interface QRCodeReaderProps {
    isSharing: boolean;
    cameraType: string;
    toggleSocialShare(): void;
    toggleQRCodeReader(): void;
    toggleCameraType(): void;
}

class QRCodeReader extends React.Component<QRCodeReaderProps, {}> {
    
    result = ResultText.noResult;

    handleScan = (data) => {
        if (data) {
            this.result = data;
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
                <p>{this.result}</p>
                <Button onClick={this.closeQRCodeReader}>Close QR Code Reader</Button>
                <Button onClick={this.changeCamera}>Change camera</Button>
                <Button disabled={this.result === ResultText.noResult} onClick={this.openSharingModal}>
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