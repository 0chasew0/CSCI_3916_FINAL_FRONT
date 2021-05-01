import React, { Component } from 'react';
import { fetchItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

/* this file is for displaying one item when it is clicked on */

class ItemDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedItem == null) {
            dispatch(fetchItem(this.props.itemId));
        }
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedItem) {
                return <div>Loading....</div>
            }

            return (
                
                <Card className ="text-center">
                    <Card.Header>Item Detail</Card.Header>
                    <Card.Body>
                        <Image className="image" src={this.props.selectedItem.imageUrl} thumbnail />
                        <Card.Title>{this.props.selectedItem.item_name}</Card.Title>

                        <Card.Text>
                            {this.props.selectedItem.price}
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                        
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

export default connect(mapStateToProps)(ItemDetail);

