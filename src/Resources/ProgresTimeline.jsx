import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Timeline, List, Avatar } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import { ClockCircleOutlined, FilePdfOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Ant Design Title 1',
  },
];

class ProgresTimeline extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()}>
          <Row>
            <Col span={24}>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={item => (
				  <List.Item>
					<List.Item.Meta
					  avatar={<FilePdfOutlined />}
					  title={<a href="https://github.com/project-thea/resources/raw/main/Driver%20Information.pdf"> <FilePdfOutlined /> Driver Sensitisation Information</a>}
					  description="This contains sensitisation information for the drivers. It's provided with translated versions in Luganda and Kiswahili"
					/>
				  </List.Item>
				)}
			  />
            </Col>
          </Row>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="tween" leaveReverse>
              <QueueAnim
                type="bottom"
                key="block"
                {...dataSource.block}
                component={Row}
              >
                { listChildren }

              </QueueAnim>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default ProgresTimeline;
