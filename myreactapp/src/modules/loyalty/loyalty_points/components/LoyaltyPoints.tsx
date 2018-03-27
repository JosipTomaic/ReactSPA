import * as React from 'react';
import '../LoyaltyPoints.css';

export class LoyaltyPoints extends React.Component<any, any> {
    constructor(state: any) {
        super(state); 
    }

    componentWillMount() {
        this.pointsInitialState();
        var currentPoints = localStorage.getItem('points');
        this.setState({ points: (JSON.parse(currentPoints ? currentPoints : '{}')).points });
    }

    pointsInitialState() {
        if (!localStorage.getItem('points')) {
            localStorage.setItem('points', JSON.stringify({ points: '0', initialState: true }));
        }
    }

    render() {
        return (
            <div>
                <div className="backgroundColor">
                    <div className="centeredCircle">
                        <div className="numberCircle">{this.state.points}</div>
                    </div>
                    <h2 className="centeredText">POINTS</h2>
                </div>
            </div>
        );
    }
}