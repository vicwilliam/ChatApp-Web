import {getAuthData} from "../../../Util/localstorage/localStorage";

const checkAuthentication = () => {
    const accessData = getAuthData();
    return Boolean(accessData && accessData.token);
};

const INITIAL_STATE = {
    Id: 0,
    authenticated: checkAuthentication(),
    user: {
        userName: '',
    },
};

const userReducer = (state = INITIAL_STATE, action) => {
    const {payload} = action;
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
