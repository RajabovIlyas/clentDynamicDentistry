import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input, Space} from 'antd'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { addDocumentTypeThunk } from '../../../../store/DocumentType/action';


const AddDocumentType = () => {
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	const onSubmit = (data) => {
		dispatch(addDocumentTypeThunk(data))
	}
	return (
		<Form form={form} onFinish={onSubmit} name='addRoleAccess' layout='vertical'>
			<Form.Item
				label='Наименование документа'
				name='name'
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label='Ключ доступа на аглийском языке к документу'
				name='keyName'
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
					{ transform: (value)=>{
						let regexp = /[\w]+$/i;
						return regexp.test(value)?value:false;
					}, message: 'Разрешены только латинские символы!' },
				]}
			>
				<Input />
			</Form.Item>
			<Form.List name="fields" 
			>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name]}
                  fieldKey={[fieldKey]}
                  rules={[{ required: true, message: 'Заполните значение' }]}
                >
                  <Input placeholder="Поле" />
                </Form.Item>
          
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Добавить поле
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddDocumentType
