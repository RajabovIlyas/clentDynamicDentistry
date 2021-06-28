import React from 'react'
import {useDispatch} from 'react-redux'

import {
    getDocumentTypeOneThunk,
} from '../../../../store/DocumentType/action'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import FormDocumentData from './FormDocumentType'


const AddDocumentData = ({id}) => {
    const dispatch = useDispatch()
    const documentType = useSelector((state) => state.DocumentType.documentType)
    useEffect(() => {
        dispatch(getDocumentTypeOneThunk({id}));
    }, [id])

    return documentType?<FormDocumentData {...documentType}/>:null;
}

export default AddDocumentData
