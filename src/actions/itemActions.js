import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'


function itemsFetched(items) {
    return {
        type: actionTypes.FETCH_ITEMS,
        items: items
    }
}

function itemFetched(item) {
    return {
        type: actionTypes.FETCH_ITEM,
        selectedItem: item
    }
}

function itemSet(item) {
    return {
        type: actionTypes.SET_ITEM,
        selectedItem: item
    }
}

export function setItem(item) {
    return dispatch => {
        dispatch(itemSet(item));
    }
}


/* this route will display one item that is clicked on */
export function fetchItem(item_id) {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/item/${item_id}`, {
            method: 'POST', // or GET?
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(itemFetched(res));
        }).catch((e) => console.log(e));
    }
}

/* this route will display all the items in the shop */
export function fetchItems() {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/item`, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(itemsFetched(res));
        }).catch((e) => console.log(e));
    }
}