import React, { Component } from 'react';
import { Trans } from "../actions/transactionActions";
import { fetchItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

/* this file is for checking out/completing a transaction */

class Transaction extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        
        dispatch(Trans(this.props.itemId));
        
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedItem) {
                return <div>Loading....</div>
            }

            return (
                
                <Card className ="text-center">
                    <Card.Header>Transaction Detail</Card.Header>
                    <Card.Body>
                        
                        <Card.Title>{this.props.selectedItem.item_name}</Card.Title>

                        <Card.Text>
                            {this.props.selectedItem.id}
                        </Card.Text>
                        <Link to='/transaction'>
                            <Button variant="primary">Buy</Button>
                        </Link>
                        
                        
                    </Card.Body>
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

