import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {logoutThunk} from "../../store/Auth/action";
import {compose} from "redux";
import {withAuthUserRedirect} from "../hoc/withAuthRedirect";
import {NavLink, Route} from "react-router-dom";
import DataMenu, {businessProcess ,documentAccess} from "./routerData";

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

const { SubMenu } = Menu;

const Cabinet = () => {
    const dispatch=useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const user = useSelector(state => state.Auth);

    const roleUser={
        role:user.role[user.role.length-1].role.roleAccess,
        documentsType:user.role[user.role.length-1].role.documentAccess,
    }

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    const logout=()=>{
        dispatch(logoutThunk());
    }
    const menuUser=roleUser.role.map(value=>DataMenu[value.keyName])
    .flat().filter((x)=> {
        return x !== undefined;
   })

   const menuDocumentAccess= roleUser.documentsType.map(value=>{return {...documentAccess,id:value._id,name:value.name}})


   //  const key=Object.keys(DataMenu);
   //  const menuUser=key.map(value=>DataMenu[value])
   //  console.log('menuUser', menuUser)
   //  const menuDocumentAccess=[]

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div style={{padding: '24px'}}> Logo</div>
                <Menu theme="dark" mode="inline" selectedKeys={[businessProcess.id]}>
                    <Menu.Item key={businessProcess.id} icon={<NavLink to={businessProcess.url}>{businessProcess.icon}</NavLink>}>
                        {businessProcess.name}
                    </Menu.Item>
                    {menuUser.map(value=>(
                        <Menu.Item key={value.id} icon={<NavLink to={value.url}>{value.icon}</NavLink>}>
                            {value.name}
                        </Menu.Item>
                    ))}
                    {menuDocumentAccess.length!==0? <SubMenu key="sub2" icon={menuDocumentAccess[0].icon} title="Документы">
                        {menuDocumentAccess.map(value=>(
                            <Menu.Item key={value.id} icon={<NavLink to={value.url+`/${value.id}`}></NavLink>}>
                                {value.name}
                            </Menu.Item>
                        ))}
                    </SubMenu>:null}
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
                    <Route path={businessProcess.url} key={businessProcess.id+'1'} exact component={businessProcess.component}/>
                    {menuUser.map(value=>(
                        <Route path={value.url} key={value.id+'1'} exact component={value.component}/>
                    ))}
                    {menuDocumentAccess.length!==0?
                        <Route path={menuDocumentAccess[0].url+'/:id'} key={menuDocumentAccess[0].id+'1'} exact component={menuDocumentAccess[0].component}/>:null}
                </Content>
                <Footer style={{textAlign: 'center'}}>dynamicDentistry ©2021 Created by Enzostudio</Footer>
            </Layout>
        </Layout>
    );

}

export default compose(
    withAuthUserRedirect,
)(Cabinet);
