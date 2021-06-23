import React from 'react'
import { useDispatch } from 'react-redux'

import { Select, Collapse } from 'antd'

import {
	getDocumentTypeThunk,
} from '../../../../store/DocumentType/action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormDocumentData from './FormDocumentType'

const { Panel } = Collapse

const AddDocumentData = () => {
	const dispatch = useDispatch()
	const documentsType = useSelector((state) => state.DocumentType.documentsType)

	useEffect(() => {
		dispatch(getDocumentTypeThunk())
	}, [])
	return (
		<Collapse>
			{documentsType.map((value) => (
				<Panel header={'Добавить документ: ' + value.name} key={value._id}>
					<FormDocumentData {...value}/>
				</Panel>
			))}
		</Collapse>
	)
}

export default AddDocumentData
