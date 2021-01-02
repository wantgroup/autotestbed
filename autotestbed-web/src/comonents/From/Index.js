import React from 'react'
import { Layout, Menu, Breadcrumb, Avatar,Dropdown  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "../From/index.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Index(props) {
  const menu = (
    <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        用户中心
      </a>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        退出登录
      </a>
    </Menu.Item>
    </Menu>
  );
    return (
        <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" className="user">
            <Menu.Item key="1">用户名</Menu.Item>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Avatar icon={<UserOutlined />} />
            </Dropdown>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="项目管理">
                <Menu.Item key="1">项目管理</Menu.Item>
                <Menu.Item key="2">页面管理</Menu.Item>
                <Menu.Item key="3">接口管理</Menu.Item>
                <Menu.Item key="4">项目设置</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="测试管理">
                <Menu.Item key="5">Web测试</Menu.Item>
                <Menu.Item key="6">App测试</Menu.Item>
                <Menu.Item key="7">接口测试</Menu.Item>
                <Menu.Item key="8">性能测试</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="系统设置">
                <Menu.Item key="9">任务管理</Menu.Item>
                <Menu.Item key="10">机器管理</Menu.Item>
                <Menu.Item key="11">人员管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default Index
