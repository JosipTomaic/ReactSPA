import * as React from 'react';
import QrReader from 'react-qr-reader';
import { Button } from 'react-bootstrap';
import { ResultText, CameraType } from './enums';

interface QRCodeReaderProps {
    closeCamera();
    showModal();
}

interface QRCodeReaderStates {
    delay: number;
    result: string;
    cameraType: string;
}

export class QRCodeReader extends React.Component<QRCodeReaderProps, QRCodeReaderStates> {
    state = {
        delay: 300,
        result: ResultText.noResult,
        cameraType: CameraType.environment
    };

    handleScan = (data) => {
        if (data) {
            this.setState({
                result: data,
            });
        }
    }

    handleError = (err) => {
        // dispachiraj poruku da se dogodila pogreska...
    }

    changeCamera = (currentCameraType: string) => {
        if (currentCameraType === CameraType.user) {
            this.setState({ cameraType: CameraType.environment });
        } else {
            this.setState({ cameraType: CameraType.user });
        }
    }

    render() {
        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode={this.state.cameraType}
                    style={{ width: '100%', align: 'center' }}
                />
                <p>{this.state.result}</p>
                <Button onClick={this.props.closeCamera}>Close QR Code Reader</Button>
                <Button onClick={this.changeCamera.bind(this, this.state.cameraType)}>Change camera</Button>
                <Button disabled={this.state.result === ResultText.noResult} onClick={this.props.showModal}>
                    Redeem discount
            </Button>
            </div>
        );
    }
}