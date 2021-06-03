import apiFetch from '../../utils/api'

const api = '/role'

export default {
	create: (data) => apiFetch(`${api}`, { method: 'post', data }, true),
	getAll: () => apiFetch(`${api}`, { method: 'get' }, true),
}
