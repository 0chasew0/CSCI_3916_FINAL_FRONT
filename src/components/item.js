import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchItem } from "../actions/itemActions";
import ItemDetail from "./itemdetail"

// support routing

function Item(props) {
    const [selectedItem] = useState(props.selectedItem);
    const params = useParams();
    const itemId = params.item_id;
    //console.log(movieId);
    const dispatch = useDispatch();
    if (selectedItem == null) {
        dispatch(fetchItem(itemId));
    }

    return (<ItemDetail itemId={itemId} />)
}

export default Item;