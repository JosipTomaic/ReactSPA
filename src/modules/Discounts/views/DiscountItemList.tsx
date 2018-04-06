import * as React from 'react';
import { Link } from 'react-router-dom';
import '../views/DiscountItemList.css';
import { discountListText } from '../enums'
import { ApplicationState } from '../';
import { DiscountItem } from '../model';
import { fetchDiscountItemsAction } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: ApplicationState) => ({
    discounts: state.discount.discountItems,
    isFetching: state.discount.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscounts: () => dispatch(fetchDiscountItemsAction())
});

interface DiscountItemListProps {
    discounts: DiscountItem[];
    isFetching: boolean;
    fetchDiscounts(): void;
}

class DiscountItemList extends React.Component<DiscountItemListProps, {}> {

    componentDidMount() {
        this.props.fetchDiscounts();
    }

    render() {
        return (
            <div>
                <h2>{discountListText.allAvailable}</h2>
                <ul>
                    {
                        this.props.discounts.map((item) =>
                            (
                                <li key={item.id}>
                                    <Link to={`/discount/${item.id}`}>
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
};

export const DiscountItemListWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscountItemList);