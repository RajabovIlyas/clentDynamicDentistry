import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Descriptions, Collapse, Form, Input, Button, Space } from 'antd'
import {
	changeDocumentTypeThunk,
	deleteDocumentTypeThunk,
	getDocumentTypeThunk,
} from '../../../../store/DocumentType/action'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import FormDocumentType from './FormDocumentType'

const { Panel } = Collapse

const ShowDocumentData = () => {

	return (
<></>
	)
}

export default ShowDocumentData
