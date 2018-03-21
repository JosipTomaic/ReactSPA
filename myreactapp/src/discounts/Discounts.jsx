import React from "react";
import discountsList from './DiscountsList.jsx';
import './Discounts.css';

export default class Discounts extends React.Component {
    constructor() {
        super();
        this.state = {
            discountsList: discountsList.map((item) =>
                <li key={item.id}>
                    <img src={item.image} />
                    <h4>{item.name}</h4>
                    <span className="regularPrice"><strike>{item.regularPrice}$</strike></span>
                    <span className="discountPrice">{item.discountPrice}$</span>
                </li>
            )
        }
    }

    render() {
        return (<ul>
            {this.state.discountsList}
        </ul>);
    }
}