import constants from '../constants/actionTypes'

let initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    countryCode: 'US'
}

const authReducer = (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch (action.type) {
        case constants.USER_LOGGEDIN:
            updated['loggedIn'] = true;
            updated['username'] = action.username;
            updated['countryCode'] = 'US';
            return updated;

        case constants.USER_LOGOUT:
            updated['loggedIn'] = false;
            updated['username'] = '';
            updated['countryCode'] = '';
            return updated;

        default:
            return state;
    }
}

export default authReducer