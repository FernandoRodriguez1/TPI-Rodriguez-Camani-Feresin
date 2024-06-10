import api from "../../API/api-hook";

export const GetAllUsers = async()=> {return await api.get('User/get-users');}
