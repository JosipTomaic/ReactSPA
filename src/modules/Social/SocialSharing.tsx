import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { withRouter } from 'react-router-dom';

export class SocialSharing extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    redeemDiscount = (discountPriceValue: number) => {
        var points = discountPriceValue * 0.5;
        var pointsObject = localStorage.getItem('points');
        var currentPoints = parseInt((JSON.parse(pointsObject ? pointsObject : '{}')).points, 10) + points;
        localStorage.setItem('points', JSON.stringify({
            points: currentPoints,
            initialState: (JSON.parse(pointsObject ? pointsObject : '{}')).initialState
        }));
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Modal show={this.props.showModalState} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Social share</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FacebookShareButton url={'http://github.com'} title={'GitHub'}>
                            <h3>Share:</h3>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Close</Button>
                        <Button onClick={this.redeemDiscount.bind(this, this.props.discountPrice)}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withRouter(SocialSharing);