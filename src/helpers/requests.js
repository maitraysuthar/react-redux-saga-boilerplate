import axios from "axios";

const API_ROOT = process.env.REACT_APP_NODE_ENV === 'production'? process.env.REACT_APP_PROD_API_URL: process.env.REACT_APP_DEV_API_URL;

export const request = (method, url, payload=null, headers=1) => {
    let requestData = {
        method: method,
        url: API_ROOT + url
    }
    if(payload)
        requestData.data = payload;
    if(headers === 1)
        requestData.headers = {
            'Authorization':'Bearer '+ localStorage.getItem('token') 
        };
    return axios(requestData);
}