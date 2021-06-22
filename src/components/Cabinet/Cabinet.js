import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {logoutThunk} from "../../store/Auth/action";
import {compose} from "redux";
import {withAuthUserRedirect} from "../hoc/withAuthRedirect";
import DataMenu from './data';
import {NavLink, Route} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

const Logo = styled.div`
color:white;
font-size: 20px;
padding: 20px 0;
`

const HeaderType = styled.div`
display: flex;
flex-direction: row;
  justify-content: flex-end;
  height: 64px;
  text-align: center;
  padding-right: 20px;
`

const Cabinet = () => {
    const dispatch=useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const user = useSelector(state => state.Auth);

    const roleUser={
        role:user.role[user.role.length-1].role.roleaccess,
    }

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    const logout=()=>{
        dispatch(logoutThunk());
    }
    const menuUser=roleUser.role.map(value=>DataMenu[value.keyName])
    .flat().filter((x)=> {
        return x !== undefined;
   })


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div style={{padding: '24px'}}> Logo</div>
                <Menu theme="dark" mode="inline">
                    {menuUser.map(value=>(
                        <Menu.Item key={value.id} icon={<NavLink to={value.url}>{value.icon}</NavLink>}>
                            {value.name}
                        </Menu.Item>
                    ))}

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <HeaderType>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1">{user.firstName}</Menu.Item>
                        <Menu.Item key="2" onClick={logout}>Выйти</Menu.Item>
                    </Menu>
                    </HeaderType>
                </Header>
                <Content style={{margin: '16px'}}>
                    {menuUser.map(value=>(
                        <Route path={value.url} key={value.id+'1'} exact component={value.component}/>
                    ))}
                </Content>
                <Footer style={{textAlign: 'center'}}>dynamicDentistry ©2021 Created by Enzostudio</Footer>
            </Layout>
        </Layout>
    );

}

export default compose(
    withAuthUserRedirect,
)(Cabinet);
