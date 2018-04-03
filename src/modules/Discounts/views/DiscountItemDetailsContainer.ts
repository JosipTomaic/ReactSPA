import { connect } from 'react-redux';
import { State } from '../reducers';
import { fetchDiscountItemByIdAction } from '../actions';
import { DiscountItemDetails } from './DiscountItemDetails';

const mapStateToProps = (state: State) => ({
    discountItems: state.discountItems,
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscountItems: (id: number) => dispatch(fetchDiscountItemByIdAction(id)),
});

export const DiscountItemDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiscountItemDetails);