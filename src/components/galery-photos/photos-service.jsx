import api from "./../API/api-hook"

export const getAllPhotosHaircut = async () => await api.get("/photos/haircut");

export const getAllPhotosColoration = async () => await api.get("/photos/coloration");