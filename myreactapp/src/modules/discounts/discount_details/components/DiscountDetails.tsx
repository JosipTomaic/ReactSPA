import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button, Modal } from 'react-bootstrap';
import { GetSpecificDiscount } from '../../../discounts';
import QrReader from 'react-qr-reader';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import '../DiscountDetails.css';

const regularPrice = 'Then';
const discountPrice = 'Now';

export class DiscountDetails extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            showCamera: false,
            delay: 300,
            result: 'No result',
            cameraType: 'environment',
            showSharing: false
        };
    }

    open = () => {
        this.setState({ showCamera: true });
    }

    close = () => {
        this.setState({ showCamera: false });
    }

    redeemDiscount(discountPriceValue: number) {
        var points = discountPriceValue * 0.5;
        var pointsObject = localStorage.getItem('points');
        var currentPoints = Number((JSON.parse(pointsObject ? pointsObject : '{}')).points) + points;
        localStorage.setItem('points', JSON.stringify({
            points: currentPoints,
            initialState: (JSON.parse(pointsObject ? pointsObject : '{}')).initialState
        }));
        this.props.history.push('/');
    }

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
        if (currentCameraType === 'user') {
            this.setState({ cameraType: 'environment' });
        } else {
            this.setState({ cameraType: 'user' });
        }
    }

    handleClose = () => {
        this.setState({ showSharing: false });
    }

    handleShow = () => {
        this.setState({ showSharing: true });
    }

    goHome = () => {
        this.props.history.push('/');
    }

    render() {
        const discount = GetSpecificDiscount(Number(this.props.match.params.id));
        if (discount) {
            if (!this.state.showCamera) {
                return (
                    <div>
                        <Panel>
                            <Panel.Heading>{discount.name}</Panel.Heading>
                            <Panel.Body>
                                <img src={discount.image} />
                            </Panel.Body>
                            <ListGroup>
                                <ListGroupItem>{regularPrice + ':' + discount.regularPrice + ' HRK'}</ListGroupItem>
                                <ListGroupItem className="discountPrice">
                                    {discountPrice + ':' + discount.discountPrice + ' HRK'}
                                </ListGroupItem>
                            </ListGroup>
                            <Panel.Body>
                                <Button onClick={this.open}>
                                    Open QR Code Reader
                                </Button>
                                <Button onClick={this.goHome}>
                                    Go back to home page
                                </Button>
                            </Panel.Body>
                        </Panel>
                    </div>
                );
            } else {
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
                        <Button onClick={this.close}>Close QR Code Reader</Button>
                        <Button onClick={this.changeCamera.bind(this, this.state.cameraType)}>Change camera</Button>
                        <Button disabled={this.state.result === 'No result'} onClick={this.handleShow}>
                            Redeem discount
                        </Button>
                        <Modal show={this.state.showSharing} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Social share</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <FacebookShareButton url={'http://github.com'} title={'GitHub'}>
                                    <h3>Share:</h3>
                                    <FacebookIcon size={32} round/>
                                </FacebookShareButton>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                                <Button onClick={this.redeemDiscount.bind(this, discount.discountPrice)}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                );
            }
        } else {
            return (<h2>Error 404 - not found.</h2>);
        }
    }
}