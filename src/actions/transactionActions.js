import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'

function transaction(transaction) {
    return {
        type: actionTypes.POST_TRANSACTION,
        selectedItem: transaction
    }
}

/* transaction */
export function Trans(item_id) {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/transaction/${item_id}`, {
            method: 'POST',
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
            dispatch(transaction(res));
        }).catch((e) => console.log(e));
    }
}