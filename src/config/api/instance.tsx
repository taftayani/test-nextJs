import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json',
    timeout: 5 * 1000,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    },

})