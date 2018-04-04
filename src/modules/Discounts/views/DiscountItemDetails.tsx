import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GetSpecificDiscount } from '../../Discounts';
import { QRCodeReader } from '../../QR';
import { SocialSharing } from '../../Social';
import { Page404 } from '../../../components';
import './DiscountItemDetails.css';
import { priceState } from '../enums';

interface DIDetailsProps {
    match: {
        params: {
            id: string
        }
    };
}

interface DIDetailsStates {
    showCamera: boolean;
    showSharing: boolean;
}

export class DiscountItemDetails extends React.Component<DIDetailsProps, DIDetailsStates> {

    discount: any;

    constructor(props: DIDetailsProps) {
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
                                <ListGroupItem>{`${priceState.then} : ${this.discount.regularPrice} HRK`}</ListGroupItem>
                                <ListGroupItem className="discountPrice">
                                    {`${priceState.now} : ${this.discount.discountPrice} HRK`}
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
                            showModalState={this.state.showSharing}
                            discountPrice={this.discount.discountPrice}
                        />
                    </div>
                );
            }
        } else {
            return (<Page404 />);
        }
    }
}