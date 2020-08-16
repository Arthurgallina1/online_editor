import api from "./api";

export const getFileTree = async () => {
    try {
        const response = await api.get("/filetree");
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getFileData = async (id) => {
    try {
        const response = await api.get(`/files/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateFileData = async (file) => {
    try {
        const response = await api.put(`/files/${file.id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteFile = async (id) => {
    try {
        const response = await api.delete(`/files/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};
