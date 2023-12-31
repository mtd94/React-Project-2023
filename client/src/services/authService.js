import * as request from '../library/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
       email,
       password
    });

    return result;
};

export const register = async (email, password,repeatPassword) => {
    const result = await request.post(`${baseUrl}/register`, {
    email,
    password,
    repeatPassword
});
return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);