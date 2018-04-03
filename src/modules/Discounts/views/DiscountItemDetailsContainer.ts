import { connect } from 'react-redux';
import { State } from '../reducers';
import { fetchDiscountItemByIdAction } from '../actions';
import { DiscountItemDetails } from './DiscountItemDetails';

const mapStateToProps = (state: State, ownProps: any) => ({
    discountItemId: parseInt(ownProps.match.params.id, 10) || -1,
    discountItem: state.discountItem,
});

const mapDispatchToProps = (dispatch) => ({
    fetchDiscountItem: (id: number) => dispatch(fetchDiscountItemByIdAction(id))
});

export const DiscountItemDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiscountItemDetails);