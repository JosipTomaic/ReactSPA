import * as React from 'react';
import { Link } from 'react-router-dom';
import '../views/DiscountItemList.css';
import { discountListText } from '../enums'
import { DiscountItem } from '../model';

interface Props {
    discountItems: DiscountItem[];
    fetchDiscountItems(): void;
}

export class DiscountItemList extends React.Component<Props, {}> {
    
    componentWillMount() {
        this.props.fetchDiscountItems();
    }

    render() {
        return (
            <div>
                <h2>{discountListText.allAvailable}</h2>
                <ul>
                    {
                        this.props.discountItems.map((item) =>
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
    }
}