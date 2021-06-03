import apiFetch from '../../utils/api'

const api = '/role'

export default {
	create: (data) => apiFetch(`${api}`, { method: 'post', data }, true),
	delete: (data) => apiFetch(`${api}/${data.id}`, { method: 'delete', data }, true),
	change: (data) => apiFetch(`${api}/${data.id}`, { method: 'put', data }, true),
	getAll: () => apiFetch(`${api}`, { method: 'get' }, true),
}
