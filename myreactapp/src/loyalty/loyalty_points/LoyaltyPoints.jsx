import React from "react";
import './LoyaltyPoints.css';

export default class LoyaltyPoints extends React.Component {
    constructor() {
        super();
        this.pointsInitialState();
        this.state = { points: (JSON.parse(localStorage.getItem("points"))).points };
    }

    pointsInitialState() {
        if (!localStorage.getItem("points")) {
            console.log("postavljam inicijalni iznos bodova...");
            localStorage.setItem("points", JSON.stringify({ points: "0", initialState: true }));
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