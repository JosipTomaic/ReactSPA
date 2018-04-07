import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Link } from 'react-router-dom';
import { ApplicationState } from 'store';
import { toggleSocialShare } from 'modules';
import { connect } from 'react-redux';
import { getFromLocalStorage, saveToLocalStorage } from 'services';
import { LocalStorageKeys } from 'enums';
import { DiscountItem, RedeemedDiscount } from '../Discounts/model';
import { saveRedeemedDiscount } from '../Discounts/actions';
import { SharingLinks, ErrorMessages } from './enums';

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

    redeemDiscount = () => {
        let discount: RedeemedDiscount = { ...this.props.discount, dateRedeemed: new Date() };
        if(!this.checkIfRedeemed(discount)){    
            var points =  this.props.discount.discountPrice * 0.5;
            var pointsObject = getFromLocalStorage(LocalStorageKeys.LoyaltyPoints);
            var currentPoints = parseInt((JSON.parse(pointsObject ? pointsObject : '{}')).points, 10) + points;
            saveToLocalStorage(LocalStorageKeys.LoyaltyPoints, JSON.stringify({
                points: currentPoints,
                initialState: (JSON.parse(pointsObject ? pointsObject : '{}')).initialState
            }));
            this.props.saveRedeemedDiscount(discount);
        }
        else window.alert(ErrorMessages.AlreadyRedeemed);
    }

    checkIfRedeemed(discount: RedeemedDiscount){
        var redeemedDiscounts = getFromLocalStorage(LocalStorageKeys.RedeemedDiscounts);
        let redeemedArray = new Array();
        redeemedArray = JSON.parse(redeemedDiscounts ? redeemedDiscounts : '{}');
        if(redeemedArray.filter(item => item.name === discount.name)){
            return true;
        }
        else return false;
    }

    render() {
        return (
            <div>
                <Modal show={this.props.isSharing} onHide={this.props.toggleSocialShare}>
                    <Modal.Header closeButton>
                        <Modal.Title>Social share</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FacebookShareButton url={SharingLinks.GithubLink} quote={SharingLinks.GithubQuote}>
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