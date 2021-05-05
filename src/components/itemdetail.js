import React, { Component } from 'react';
import { fetchItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, Popover, Button, OverlayTrigger } from 'react-bootstrap';
import {popover} from 'react';
import { Image } from 'react-bootstrap';
import {renderTooltip} from 'react';
import {Link} from 'react-router-dom'
import {submitLogin} from '../actions/authActions';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
                            Product Country
                        </Card.Text>
                        <Card.Text>
                            {this.props.selectedItem.countryCode}
                        </Card.Text>
                        <Card.Text>
                            Your Country
                        </Card.Text>
                            US
                        <Card.Text>
                            {this.props.selectedItem.price}
                        </Card.Text>
                    
                        
                        <Popup trigger={<button disabled={('US' !== this.props.selectedItem.countryCode) ? true:false}>Buy</button>} position="right center">
                            <div>Successfully purchased. Thank you!</div>
                        </Popup>

                        
                        
                        
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
        selectedItem: state.item.selectedItem,
        cCode: state.auth.countryCode
    }
}

export default connect(mapStateToProps)(ItemDetail);

