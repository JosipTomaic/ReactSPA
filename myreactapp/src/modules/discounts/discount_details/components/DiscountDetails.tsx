import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { GetSpecificDiscount } from '../../index';
import '../DiscountDetails.css';

const regularPrice = 'Then';
const discountPrice = 'Now';

export class DiscountDetails extends React.Component<any, any> {

    updatePoints() {
        localStorage.getItem('points');
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
                        <Button>Redeem discount</Button>
                    </Panel.Body>
                </Panel>
            );
        } else {
            return (<h2>Error 404 - not found.</h2>);
        }
    }
}