import axios from 'axios';
import {config} from "./config";
import {getAuthData} from "./localstorage/localStorage";

const api = axios.create(config);

api.interceptors.request.use(axiosConf => {
    const authData = getAuthData();
    if (authData)
        axiosConf.headers["Authorization"] = `Bearer ${authData.token.token}`
    axiosConf.headers['Content-Type'] = 'application/json';
    return axiosConf;
})
export const errorsToString = (errors) => {
    const errorString = errors.errors.map(x => x.description);
    return errorString.join('\n');
}
export default api;
