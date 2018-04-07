import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QRCodeReader } from '../../QR';
import { SocialSharing } from '../../Social';
import { Page404 } from '../../../components';
import './DiscountItemDetails.css';
import { PriceState } from '../enums';
import { ApplicationState } from 'store';
import { fetchDiscountItemByIdAction, toggleQRCodeReader, toggleSocialShare } from '../actions';
import { connect } from 'react-redux';
import { DiscountItem } from '../model';

const mapStateToProps = (state: ApplicationState) => ({
    isFetching: state.discount.isFetching,
    isCameraShowing: state.discount.isCameraShowing,
    isSharing: state.discount.isSharing,
    discount: state.discount.discountItem
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscountById: (id: number) => dispatch(fetchDiscountItemByIdAction(id)),
    toggleQRCodeReader: () => dispatch(toggleQRCodeReader()),
    toggleSocialShare: () => dispatch(toggleSocialShare())
});

interface DiscountItemDetailsProps {
    isFetching: boolean,
    isCameraShowing: boolean,
    isSharing: boolean,
    discount: DiscountItem,
    match: {
        params: {
            id: string
        }
    };
    fetchDiscountById(id: number): void;
    toggleQRCodeReader(): void;
    toggleSocialShare(): void;
}

export class DiscountItemDetails extends React.Component<DiscountItemDetailsProps, {}> {

    componentWillMount() {
        this.props.fetchDiscountById(parseInt(JSON.stringify(this.props.match.params.id), 10));
    }

    openQRCodeReader = () => {
        this.props.toggleQRCodeReader();
    }

    // closeQRCodeReader = () => {
    //     this.setState({ showCamera: false });
    // }

    // handleClose = () => {
    //     this.setState({ showSharing: false });
    // }

    openSocialShareModal = () => {
        this.props.toggleSocialShare();
    }

    render() {
        const { name, image, regularPrice, discountPrice} = this.props.discount;
        if (this.props.discount) {
            if (!this.props.isCameraShowing) {
                return (
                    <div>
                        <Panel>
                            <Panel.Heading>{ name }</Panel.Heading>
                            <Panel.Body>
                                <img src={ image } />
                            </Panel.Body>
                            <ListGroup>
                                <ListGroupItem>{`${ PriceState.then } : ${ regularPrice } HRK`}</ListGroupItem>
                                <ListGroupItem className="discountPrice">
                                    {`${ PriceState.now } : ${ discountPrice } HRK`}
                                </ListGroupItem>
                            </ListGroup>
                            <Panel.Body>
                                <Button onClick={ this.openQRCodeReader }>
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
                        <QRCodeReader />
                        <SocialSharing discountPrice={ discountPrice }/>
                    </div>
                );
            }
        } else {
            return (<Page404 />);
        }
    }
}

export const DiscountItemDetailsWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscountItemDetails);