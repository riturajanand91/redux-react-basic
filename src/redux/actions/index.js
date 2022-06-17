import { GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER, GET_USER_BY_ID } from './types';
import { httpClient } from '../../httpClient/httpClient';

export const fetchUsers = () => {
    const getUrl = "/api/users";
    return (dispatch) => {
        httpClient
            .get(getUrl)
            .then((res) => {
                // console.log(res.data);
                dispatch(getUsersSuccess(res.data))
            })
            .catch(error => console.log(error))
    }
};
const getUsersSuccess = (users) => ({
    type: GET_USERS,
    payload: users
});

export const postUser = (obj) => {
    // console.log(obj);
    const postUrl = "/api/users";
    return (dispatch) => {
        httpClient
            .post(postUrl, obj)
            .then(res => {
                dispatch(postDataSuccess(res.data));
            })
            .catch(error => console.log(error))
    }
};
const postDataSuccess = (users) => {
    return {
        type: ADD_USER,
        payload: users
    }
}
export const getUserById = (_id) => {
    return (dispatch) => {
        httpClient
            .get(`/api/users/${_id}`)
            .then(res => {
                // console.log(res);
                dispatch(dataSuccessUserById(res.data));
            })
            .catch(error => console.log(error))
    }
};
const dataSuccessUserById = (users) => {
    return {
        type: GET_USER_BY_ID,
        payload: users
    }
}

export const putUser = (obj, id) => {
    return (dispatch) => {
        httpClient
            .put(`/api/users/${id}`, obj)
            .then(res => {
                dispatch(putDataSuccess(res.data));
            })
            .catch(error => console.log(error))
    }
};
const putDataSuccess = (res) => {
    return {
        type: UPDATE_USER,
        payload: res
    }
}

export const deleteUser = (id) => {
    // console.log(id);
    return (dispatch) => {
        httpClient
            .delete(`/api/users/${id}`)
            .then(res => {
                dispatch(deleteDataSuccess(res.data));
                dispatch(fetchUsers())
            })
            .catch(error => console.log(error))
    }
};
const deleteDataSuccess = (response) => {
    return {
        type: DELETE_USER,
        payload: response
    }
}