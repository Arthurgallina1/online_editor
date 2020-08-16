import api from "./api";

export const getFileTree = async () => {
    try {
        const response = await api.get("/filetree");
        return response;
    } catch (error) {
        console.log(error);
    }
};
