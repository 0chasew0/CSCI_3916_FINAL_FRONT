import React, { Component } from 'react';
import { Trans } from "../actions/transactionActions";
//import { fetchItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, Button } from 'react-bootstrap';
//import {Link} from 'react-router-dom'

/* this file is for checking out/completing a transaction */

class Transaction extends Component {

    componentDidMount() {
         const {dispatch} = this.props;
         dispatch(Trans());
        
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedItem) {
                return <div>Loading....</div>
            }

            return (
                <Card>
                    <Card.Header>
                        Transaction for Item {this.props.selectedItem.itemId}
                    </Card.Header>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCredit">
                            <Form.Label>Credit Card</Form.Label>
                            <Form.Control placeholder="Enter credit card" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridExpiration">
                            <Form.Label>Expiration</Form.Label>
                            <Form.Control placeholder="MM/YY" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSecurityCode">
                            <Form.Label>Security Code</Form.Label>
                            <Form.Control placeholder="000" />
                            </Form.Group>
                        </Form.Row>

                        <>
                            <Button ref={target} onClick={() => setShow(!show)}>
                                Submit
                            </Button>
                            <Overlay target={target.current} show={show} placement="right">
                                {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Success!
                                </Tooltip>
                                )}
                            </Overlay>
                        </>



                    </Form>
                </Card>
                
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedItem: state.item.selectedItem
    }
}

export default connect(mapStateToProps)(Transaction);

