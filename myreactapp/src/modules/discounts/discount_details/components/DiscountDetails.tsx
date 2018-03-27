import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { GetSpecificDiscount } from '../../index';
import '../DiscountDetails.css';

const regularPrice = 'Then';
const discountPrice = 'Now';

export class DiscountDetails extends React.Component<any, any> {

    redeemDiscount(discountPriceValue: number) {
        var points = discountPriceValue * 0.5;
        var pointsObject = localStorage.getItem('points');
        var currentPoints = Number((JSON.parse(pointsObject ? pointsObject : '{}')).points) + points;
        localStorage.setItem('points', JSON.stringify({
            points: currentPoints, 
            initialState: (JSON.parse(pointsObject ? pointsObject : '{}')).initialState 
        }));
        this.props.history.push('/');
    }

    render() {
        const discount = GetSpecificDiscount(Number(this.props.match.params.id));
        if (discount) {
            return (
                <Panel>
                    <Panel.Heading>{discount.name}</Panel.Heading>
                    <Panel.Body>
                        <img src={discount.image} />
                    </Panel.Body>
                    <ListGroup>
                        <ListGroupItem>{regularPrice + ':' + discount.regularPrice + ' HRK'}</ListGroupItem>
                        <ListGroupItem className="discountPrice">{discountPrice + ':' + discount.discountPrice + ' HRK'}
                        </ListGroupItem>
                    </ListGroup>
                    <Panel.Body>
                        <Button onClick={this.redeemDiscount.bind(this, discount.discountPrice)}>
                            Redeem discount
                        </Button>
                    </Panel.Body>
                </Panel>
            );
        } else {
            return (<h2>Error 404 - not found.</h2>);
        }
    }
}