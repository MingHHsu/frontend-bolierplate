import type { MenuProps } from 'antd';
import { Col, Menu, Row, Space } from "antd";

const headerNavigationItems: MenuProps['items'] = [
  {
    key: '1',
    label: 'Nav One',
  },
  {
    key: '2',
    label: 'Nav Two',
  },
  {
    key: '3',
    label: 'Nav Three',
  },
];

export function HeaderContent() {
  return (
    <Row style={{ width: '100%', height: '100%' }} justify="space-between" align="middle">
      <Col>
        <Space>
          <div
            style={{
              width: '120px',
              minWidth: '120px',
              height: '32px',
              background: 'rgba(255, 255, 255, .2)',
              borderRadius: '6px',
              marginInlineEnd: '24px',
            }}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={headerNavigationItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Space>
      </Col>
      <Col>
        <div>Setting</div>
      </Col>
    </Row>
  );
}