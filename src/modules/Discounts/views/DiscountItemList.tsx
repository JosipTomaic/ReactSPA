import * as React from 'react';
import { GetAllDiscounts } from '../constants';
import { Link } from 'react-router-dom';
import '../views/DiscountItemList.css';
import { discountListText } from '../enums'

export const DiscountItemList = () => {
    return (
        <div>
            <h2>{discountListText.allAvailable}</h2>
            <ul>
                {
                    GetAllDiscounts().map((item) =>
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