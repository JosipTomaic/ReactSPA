import * as React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { GetSpecificDiscount } from '../../../discounts';
import { CameraPlugin } from '../../../../modules';
import '../DiscountDetails.css';

const regularPrice = 'Then';
const discountPrice = 'Now';

export class DiscountDetails extends React.Component<any, any> {

    constructor(state: any) {
        super(state);
        this.state = { showModal: false };
    }

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    render() {
        const discount = GetSpecificDiscount(Number(this.props.match.params.id));
        if (discount) {
            return (
                <div>
                    <CameraPlugin showModal={this.state.showModal} />
                    <Panel>
                        <Panel.Heading>{discount.name}</Panel.Heading>
                        <Panel.Body>
                            <img src={discount.image} />
                        </Panel.Body>
                        <ListGroup>
                            <ListGroupItem>{regularPrice + ':' + discount.regularPrice + ' HRK'}</ListGroupItem>
                            <ListGroupItem className="discountPrice">
                                {discountPrice + ':' + discount.discountPrice + ' HRK'}
                            </ListGroupItem>
                        </ListGroup>
                        <Panel.Body>
                            <Button onChange={() => this.open.bind(this)}>
                                Redeem discount
                        </Button>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        } else {
            return (<h2>Error 404 - not found.</h2>);
        }
    }
}