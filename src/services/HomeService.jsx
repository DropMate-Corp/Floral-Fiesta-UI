import axios from 'axios';

const plantURI = import.meta.env.VITE_FLORALFIESTA_API_URI + '/plant';
const categoryURI = import.meta.env.VITE_FLORALFIESTA_API_URI + '/category';

const header = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const getAllPlants = async () => {
    const response = await axios.get(plantURI + '/all', header);
    return response.data;
}

const getAllCategories = async () => {
    const response = await axios.get(categoryURI + '/all', header);
    return response.data;
}

export {
    getAllPlants,
    getAllCategories,
}