import apiFetch from '../../utils/api'

const api = '/document-data'

export default {
	create: (data) => apiFetch(`${api}`, { method: 'post', data }, true),
	delete: (data) => apiFetch(`${api}/${data.id}`, { method: 'delete', data }, true),
	change: (data) => apiFetch(`${api}/${data.id}`, { method: 'put', data }, true),
	getAll: () => apiFetch(`${api}`, { method: 'get' }, true),
	getDataByDocumentTypeID: (data) => apiFetch(`${api}/by-document-type/${data.id}`, { method: 'get' }, true),
	getDataByDocumentBusiness: () => apiFetch(`${api}/business-process`, { method: 'get' }, true),
	getTypeField: () => apiFetch(`${api}/type`, { method: 'get' }, true),
}
