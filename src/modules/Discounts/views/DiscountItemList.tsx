import * as React from 'react';
import { Link } from 'react-router-dom';
import './DiscountItemList.css';
import { DiscountListText } from '../enums'
import { ApplicationState } from 'store';
import { DiscountItem } from '../model';
import { fetchDiscountItemsAction, setDiscountId } from '../actions';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { LoadingAnimationSettings } from 'enums';

const mapStateToProps = (state: ApplicationState) => ({
    discounts: state.discount.discountItems,
    isFetching: state.discount.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscounts: () => dispatch(fetchDiscountItemsAction()),
    setDiscountId: (id: number) => dispatch(setDiscountId(id))
});

interface DiscountItemListProps {
    discounts: DiscountItem[];
    isFetching: boolean;
    fetchDiscounts(): void;
    setDiscountId(id: number): void;
}

class DiscountItemList extends React.Component<DiscountItemListProps, {}> {

    componentDidMount() {
        this.props.fetchDiscounts();
    }

    setDiscountId = (id: number) => {
        this.props.setDiscountId(id);
    }

    render() {
        if(this.props.isFetching){
            return <ReactLoading type={LoadingAnimationSettings.Type} color={LoadingAnimationSettings.Color} height='667' width='375' />
        }
        else{
            return (
                <div>
                    <h2>{DiscountListText.allAvailable}</h2>
                    <ul>
                        {
                            this.props.discounts.map((item) =>
                                (
                                    <li key={item.id}>
                                        <Link to={`/discount/${item.id}`} onClick={this.setDiscountId.bind(this, item.id)}>
                                            <div>
                                                <img src={item.image} />
                                            </div>
                                            <h4>{item.name}</h4>
                                        </Link>
                                        <div className="inlinePrices">
                                            <span className="regularPrice">{item.regularPrice} HRK</span>
                                            <span className="discountPrice">{item.discountPrice} HRK</span>
                                        </div>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            );
        }
    }
};

export const DiscountItemListWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscountItemList);