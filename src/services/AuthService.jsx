import axios from 'axios';

const userURI = import.meta.env.VITE_FLORALFIESTA_API_URI + '/user';

const header = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const register = async (user) => {
    const { name, email, password, phoneNumber, address } = user;
    const response = await axios.post(userURI + '/register?name=' + name + '&email=' + email + '&password=' + password + '&phoneNumber=' + phoneNumber + '&address=' + address, { ...header })
    .catch((error) => {
        return error.response;
    })
    .then((response) => {
        return response;
    });
    return response;
}

const login = async (user) => {
    const { email, password } = user;
    const response = await axios.post(userURI + '/login?email=' + email + '&password=' + password, { ...header })
        .catch((error) => {
            return error.response;
        })
        .then((response) => {
            return response;
        });
    return response;
}

export {
    register,
    login,
}