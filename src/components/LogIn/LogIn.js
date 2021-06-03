import React from 'react';
import { Form, Input, Card, Button } from 'antd';
import { UserOutlined, LockOutlined,HomeOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles.module.css';
import {setAuthThunk} from "../../store/Auth/action";
import {Redirect} from "react-router-dom";

const LogIn=(props)=>{
    const user=useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onSubmit = (values) => {
       dispatch(setAuthThunk(values))
    };
    if(user.isAuth){
        return <Redirect to='/cabinet'/>
    }


    return (
        <div className={styles.layout}>
            <Card className={styles.innerLayout} style={{paddingTop:'24px'}}>
                <Form form={form} name="log-in" onFinish={onSubmit}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш email',
                            },
                            { type: 'email', message: 'Пожалуйста, проверьте ваш email' },
                        ]}
                    >
                        <Input
                            className={styles.input}
                            size="large"
                            placeholder="Email"
                            prefix={<UserOutlined />}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш пароль',
                            },
                            { min: 6, message: 'Пароль должен состоять минимум из 6 символов' },
                        ]}
                    >
                        <Input
                            className={styles.input}
                            size="large"
                            placeholder="Пароль"
                            type="password"
                            prefix={<LockOutlined />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={styles.button}>
                            <Button htmlType="submit" type="primary" shape="round" size={'large'}>
                                Войти
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default LogIn;
