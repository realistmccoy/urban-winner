import axios from "axios";
import {GET_ERRORS} from './types'

//Register user

export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/register", userData)
        //this history will once user is registered it will push into login page
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data  
            })
            );

}