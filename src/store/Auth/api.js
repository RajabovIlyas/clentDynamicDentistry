import apiFetch from '../../utils/api';

const api = '/auth';

export default {
    logIn : (data) => apiFetch(`${api}/log-in`, {method: 'post', data}),
    authMe : () => apiFetch(`${api}/auth-me`, {method: 'get'}, true),
    logout : () => apiFetch(`${api}/logout`, {method: 'delete'}, true),
}
