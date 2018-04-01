import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GetSpecificDiscount } from '../../Discounts';
import { QRCodeReader } from '../../QR';
import { SocialSharing } from '../../Social';
import './DiscountItemDetails.css';

const regularPrice = 'Then';
const discountPrice = 'Now';

export class DiscountItemDetails extends React.Component<any, any> {

    discount: any;

    constructor(props: any) {
        super(props);
        this.state = {
            showCamera: false,
            showSharing: false,
        };
    }

    componentWillMount() {
        this.discount = GetSpecificDiscount(parseInt(this.props.match.params.id, 10));
    }

    open = () => {
        this.setState({ showCamera: true });
    }

    close = () => {
        this.setState({ showCamera: false });
    }

    handleClose = () => {
        this.setState({ showSharing: false });
    }

    handleShow = () => {
        this.setState({ showSharing: true });
    }

    render() {
        if (this.discount) {
            if (!this.state.showCamera) {
                return (
                    <div>
                        <Panel>
                            <Panel.Heading>{this.discount.name}</Panel.Heading>
                            <Panel.Body>
                                <img src={this.discount.image} />
                            </Panel.Body>
                            <ListGroup>
                                <ListGroupItem>{regularPrice + ':' + this.discount.regularPrice + ' HRK'}</ListGroupItem>
                                <ListGroupItem className="discountPrice">
                                    {discountPrice + ':' + this.discount.discountPrice + ' HRK'}
                                </ListGroupItem>
                            </ListGroup>
                            <Panel.Body>
                                <Button onClick={this.open}>
                                    Open QR Code Reader
                                </Button>
                                <Link to="/">
                                    Go back to home page
                                </Link>
                            </Panel.Body>
                        </Panel>
                    </div>
                );
            } else {
                return (
                    <div>
                        <QRCodeReader closeCamera={this.close} showModal={this.handleShow} />
                        <SocialSharing
                            closeModal={this.handleClose}
                            showModal={this.handleShow}
                            showModalState={this.state.showSharing}
                            discountPrice={this.discount.discountPrice}
                        />
                    </div>
                );
            }
        } else {
            return (<h2>Error 404 - not found.</h2>);
        }
    }
}