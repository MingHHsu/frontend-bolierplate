import { Breadcrumb, Layout, theme } from "antd";

import styles from './main-layout.module.scss';
import { Outlet } from "react-router-dom";
import { HeaderContent } from "./Header";

const { Header, Content } = Layout;

export function MainLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className={styles.main_layout}>
      <Header className={styles.header}>
        <HeaderContent />
      </Header>
      <Content className={styles.body}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className={styles.content_wrapper}
          style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}