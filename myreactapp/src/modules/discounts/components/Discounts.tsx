import * as React from 'react';
import { discountsList } from './DiscountsList';
import { Link } from 'react-router-dom';
import '../Discounts.css';

const discountsText = 'Available discounts';

export const Discounts = () => {
    return (
        <div>
            <h2>{discountsText}</h2>
            <ul>
                {
                    discountsList.map((item) =>
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
};