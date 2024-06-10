import api from "../../API/api-hook";

export const GetAllUsers = async()=> {return await api.get('User/get-users');}
export const DeleteUser = async (userId) => {
    return await api.delete(`User/delete-user/${userId}`);
};
export const AddUser = async(userData) => {
    return await api.post('User/add-user', userData);
};