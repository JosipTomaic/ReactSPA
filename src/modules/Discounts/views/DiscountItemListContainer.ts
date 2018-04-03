import { connect } from 'react-redux';
import { State } from '../reducers';
import { fetchDiscountItemsAction } from '../actions';
import { DiscountItemList } from './DiscountItemList';

const mapStateToProps = (state: State) => ({
    discountItems: state.discountItems,
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscountItems: () => dispatch(fetchDiscountItemsAction()),
});

export const DiscountItemListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiscountItemList);