import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QRCodeReaderWrapper } from '../../QR';
import { SocialSharingWrapper } from '../../Social';
import { Page404 } from '../../../components';
import './DiscountItemDetails.css';
import { PriceState } from '../enums';
import { ApplicationState } from 'store';
import { fetchDiscountItemByIdAction } from '../actions';
import { connect } from 'react-redux';
import { DiscountItem } from '../model';
import { toggleQRCodeReader, RedeemedDiscount } from 'modules';
import { LocalStorageKeys } from 'enums';
import { getFromLocalStorage } from 'services';
import { PageAlreadyRedeemed } from 'components/PageAlreadyRedeemed';

const mapStateToProps = (state: ApplicationState) => ({
    isFetching: state.discount.isFetching,
    isCameraShowing: state.qr.isCameraShowing,
    discount: state.discount.discountItem
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscountById: (id: number) => dispatch(fetchDiscountItemByIdAction(id)),
    toggleQRCodeReader: () => dispatch(toggleQRCodeReader()),
});

interface DiscountItemDetailsProps {
    match:{
        params: {
            id: string
        }
    }
    isFetching: boolean,
    isCameraShowing: boolean,
    discount: DiscountItem,
    fetchDiscountById(id: number): void;
    toggleQRCodeReader(): void;
}

class DiscountItemDetails extends React.Component<DiscountItemDetailsProps, {}> {

    componentDidMount() {
        this.props.fetchDiscountById(parseInt(this.props.match.params.id, 10));
    }

    openQRCodeReader = () => {
        this.props.toggleQRCodeReader();
    }

    checkIfRedeemed = (discount: DiscountItem) => {
        var redeemedDiscounts = getFromLocalStorage(LocalStorageKeys.RedeemedDiscounts);
        if(redeemedDiscounts === null){
            return false;
        }
        else{
            var  redeemedArray = new Array<RedeemedDiscount>();
            redeemedArray = JSON.parse(redeemedDiscounts || '{}');
            if(redeemedArray.find(item => item.id === discount.id)){
                return true;
            }
            else return false;
        }
    }

    render() {
        const { name, image, regularPrice, discountPrice } = this.props.discount;
        if (this.props.discount) {
            if(this.checkIfRedeemed(this.props.discount)){
                return (<PageAlreadyRedeemed />)
            }
            else if (!this.props.isCameraShowing) {
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
                        <QRCodeReaderWrapper />
                        <SocialSharingWrapper />
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