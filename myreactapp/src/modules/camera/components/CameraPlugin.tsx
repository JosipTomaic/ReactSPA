import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

export class CameraPlugin extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: this.props.showModal,
            discountPrice: this.props.discountPrice
        };
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

    // open() {
    //     this.setState({ showModal: true });
    // }

    close() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>QR Code Reader</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Body</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary" onClick={this.redeemDiscount.bind(this, this.state.discountPrice)}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        );
    }
}