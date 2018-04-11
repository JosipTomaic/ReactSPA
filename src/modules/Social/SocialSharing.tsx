import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Link } from 'react-router-dom';
import { ApplicationState } from 'store';
import { toggleSocialShare } from 'modules';
import { connect } from 'react-redux';
import { getFromLocalStorage, saveToLocalStorage } from 'services';
import { LocalStorageKeys, Currency } from 'enums';
import { DiscountItem, RedeemedDiscount } from '../Discounts/model';
import { saveRedeemedDiscount } from '../Discounts/actions';
import { SharingLinks } from './enums';
import { PriceState } from '../Discounts/enums';

const mapStateToProps = (state: ApplicationState) => ({
    isSharing: state.social.isSharing,
    discount: state.discount.discountItem
});

const mapDispatchToProps = (dispatch) => ({
    toggleSocialShare: () => dispatch(toggleSocialShare()),
    saveRedeemedDiscount: (discount: RedeemedDiscount) => dispatch(saveRedeemedDiscount(discount))
});

interface SocialSharingProps {
    isSharing: boolean;
    discount: DiscountItem;
    toggleSocialShare(): void;
    saveRedeemedDiscount(discount: RedeemedDiscount): void;
}

class SocialSharing extends React.Component<SocialSharingProps, {}> {

    componentWillUnmount(){
        this.props.toggleSocialShare();
    }

    redeemDiscount = () => {
        let discount: RedeemedDiscount = { ...this.props.discount, dateRedeemed: new Date() };
        var points = this.props.discount.discountPrice * 0.5;
        var pointsObject = getFromLocalStorage(LocalStorageKeys.LoyaltyPoints);
        var currentPoints = parseInt((JSON.parse(pointsObject || '{}')).points, 10) + points;
        saveToLocalStorage(LocalStorageKeys.LoyaltyPoints, JSON.stringify({
            points: currentPoints,
            initialState: (JSON.parse(pointsObject || '{}')).initialState
        }));
        this.props.saveRedeemedDiscount(discount);
        this.props.toggleSocialShare();
    }

    render() {
        return (
            <div>
                <Modal show={this.props.isSharing} onHide={this.props.toggleSocialShare}>
                    <Modal.Header closeButton>
                        <Modal.Title>Social share</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FacebookShareButton 
                            url={this.props.discount.image} 
                            quote={
                                `${SharingLinks.RedeemText} - ${this.props.discount.name}
                                ${PriceState.Then} - ${this.props.discount.regularPrice} ${Currency.Croatia}
                                ${PriceState.Now} - ${this.props.discount.discountPrice} ${Currency.Croatia}`
                            }>
                            <h3>Share:</h3>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.toggleSocialShare}>Close</Button>
                        <Link to="/"><Button onClick={this.redeemDiscount}>Confirm</Button></Link>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export const SocialSharingWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(SocialSharing);