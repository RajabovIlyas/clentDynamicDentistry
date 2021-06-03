import apiFetch from '../../utils/api'

const api = '/user'

export default {
	create: (data) => apiFetch(`${api}`, { method: 'post', data }, true),
	getAll: () => apiFetch(`${api}`, { method: 'get' }, true),
}
