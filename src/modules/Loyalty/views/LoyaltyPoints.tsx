import * as React from 'react';
import { ApplicationState } from 'store';
import './LoyaltyPoints.css';
import { fetchLoyaltyPointsAction, setInitialLoyaltyPointsAction } from '../actions';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

const TYPE = "bars";
const COLOR = "black";

const mapStateToProps = (state: ApplicationState) => ({
    loyaltyPoints: state.loyalty.loyaltyPoints,
    isFetching: state.loyalty.isFetching,
    isSettingInitial: state.loyalty.isSettingInitial,
    isInitialSet: state.loyalty.isInitialSet
});

const mapDispatchToProps = (dispatch) => ({
    setInitialPoints: () => dispatch(setInitialLoyaltyPointsAction()),
    fetchLoyaltyPoints: () => dispatch(fetchLoyaltyPointsAction())
});

interface LoyaltyPointsProps {
    loyaltyPoints: number;
    isFetching: boolean;
    isSettingInitial: boolean;
    isInitialSet: boolean;
    setInitialPoints(): void;
    fetchLoyaltyPoints(): void;
}

class LoyaltyPoints extends React.Component<LoyaltyPointsProps, {}> {

    componentWillMount() {
        this.pointsInitialState();
        let currentPoints = localStorage.getItem('points');
        this.setState({ 
            points: (JSON.parse(currentPoints ? currentPoints : '{}')).points, 
            initialState: (JSON.parse(currentPoints ? currentPoints : '{}')).initialState 
        });
    }

    pointsInitialState() {
        if (!localStorage.getItem('points')) {
            localStorage.setItem('points', JSON.stringify({ points: 0, initialState: true }));
        }
    }

    render() {
        if(this.props.isFetching){
            return <ReactLoading type={TYPE} color={COLOR} height='667' width='375' />
        }
        else{
            return (
                <div>
                    <div className="backgroundColor">
                        <div className="centeredCircle">
                            <div className="numberCircle">{this.props.loyaltyPoints}</div>
                        </div>
                        <h2 className="centeredText">POINTS</h2>
                    </div>
                </div>
            );
        }
    }
}

export const LoyaltyPointsWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoyaltyPoints);