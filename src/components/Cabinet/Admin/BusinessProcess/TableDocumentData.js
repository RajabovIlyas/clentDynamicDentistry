import React, {useEffect} from 'react';
import {Table, Tag, Space} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getDocumentDataBusinessThunk} from "../../../../store/DocumentData/action";

const columns = [
    {
        title: 'ФИО Создателя',
        dataIndex: 'fio',
        key: 'fio',
    },
    {
        title: 'Название документа',
        dataIndex: 'documentName',
        key: 'documentName',
    },
    {
        title: 'Статус',
        key: 'status',
        dataIndex: 'status',
        render: status =>  {
                    let color='blue';
                    return (
                        <Tag color={color} key={status}>
                            {status}
                        </Tag>
                    );
                },
    },]

const TableDocumentData = (props) => {
    const data = useSelector(state => state.DocumentData.documentsDataBusiness)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDocumentDataBusinessThunk())
    }, [])


    return (
        <Table dataSource={data} columns={columns} bordered/>
    )
}


export default TableDocumentData
