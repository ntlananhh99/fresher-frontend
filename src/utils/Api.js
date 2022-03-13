import { api } from '../API/api';

/* call api related to User here */

// Khai báo 1 hàm tương ứng với 1 api, các page/component gọi dùng lại

// create user function
export const createUser = (data) => {
    try {
        return api.post(`/create`, data);
    } catch (error) {
        console.log(error);
    }
}
// detele user func
export const deleteUser = (id) => {
    return api.delete(`/${id}/delete/`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

// get all user function
export const getAllUser = () => {
    try {
        return api.get('/get');
    }
    catch (error) {
        console.log(error);
    }
}

// get 1 user
export const getUser = (id) => {
    try {
        return api.get(`/get/${id}`);
    }
    catch (error) {
        console.log(error);
    }
}

// update user func
export const updateUser = (data, id) => {
    try {
        return api.put(`/${id}/update`, data);
    } catch (error) {
        console.log(error);
    }
}