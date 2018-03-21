import React from "react";
import discountsList from './DiscountsList.jsx';
import './Discounts.css';

export default class Discounts extends React.Component {
    constructor() {
        super();
        this.state = {
            discountsList: discountsList.map((item) =>
                <li key={item.id}>
                    <div>
                        <img src={item.image} />
                    </div>
                    <h4>{item.name}</h4>
                    <div className="inlinePrices">
                        <span className="regularPrice"><strike>{item.regularPrice} HRK</strike></span>
                        <span className="discountPrice">{item.discountPrice} HRK</span>
                    </div>
                </li>
            )
        }
    }

    render() {
        return (<ul className="backgroundColor">
            {this.state.discountsList}
        </ul>);
    }
}