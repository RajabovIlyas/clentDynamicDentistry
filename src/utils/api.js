import axios from 'axios';

const mainUrl='http://localhost:5000';

const apiFetch = (url, options = {}, token) => {
    const apiUrl = mainUrl + url;
    if (token) {
        return axios(apiUrl, {
            ...options,
            headers: {
                Authorization: 'Bearer ' +localStorage.getItem('TOKEN_USER'),
            },
        }).then(result=>result.data);
    }

    return axios(apiUrl, {
        ...options,
    }).then(result=>result.data);
};

export default apiFetch;
