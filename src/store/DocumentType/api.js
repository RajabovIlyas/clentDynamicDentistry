import apiFetch from '../../utils/api'

const api = '/document-type'

export default {
	create: (data) => apiFetch(`${api}`, { method: 'post', data }, true),
	delete: (data) => apiFetch(`${api}/${data.id}`, { method: 'delete', data }, true),
	change: (data) => apiFetch(`${api}/${data.id}`, { method: 'put', data }, true),
	getOne: (data) => apiFetch(`${api}/${data.id}`, { method: 'get' }, true),
	getAll: () => apiFetch(`${api}`, { method: 'get' }, true),
	getTypeField: () => apiFetch(`${api}/type`, { method: 'get' }, true),
}
