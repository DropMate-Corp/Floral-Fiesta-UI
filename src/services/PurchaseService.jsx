import axios from 'axios';

const orderURI = import.meta.env.VITE_FLORALFIESTA_API_URI + '/order';
const acpURI = import.meta.env.VITE_FLORALFIESTA_API_URI + '/acp';

const header = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const getAllACPs = async () => {
    try {
        const response = await axios.get(acpURI + '/all', { ...header });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const createOrder = async (order) => {
    let response;
    try {
        response = await axios.post(orderURI + '/create', order, { ...header });
    } catch (error) {
        response = error.response;
    }
    return response;
}

const getOngoingOrders = async (userId) => {
    const response = await axios.get(`${orderURI}/ongoing/${userId}`, { ...header });
    return response.data;
};

const getDeliveredOrders = async (userId) => {
    const response = await axios.get(`${orderURI}/delivered/${userId}`, { ...header });
    return response.data;
};


export {
    getAllACPs,
    createOrder,
    getOngoingOrders,
    getDeliveredOrders
}