import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Timeline, List, Avatar } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import { ClockCircleOutlined, FilePdfOutlined } from '@ant-design/icons';

const resourceList = [
  {
    title: 'Driver Sensitisation Information',
	url: 'https://github.com/project-thea/resources/raw/main/Driver%20Information.pdf',
	desc: "This contains sensitisation information for the drivers. It\'s provided with translated versions in Luganda and Kiswahili"
  },
  {
    title: 'THEA-DCT Poster',
	url: 'https://raw.githubusercontent.com/project-thea/project-thea-website/master/src/assets/THEA-DCT-Poster.pdf',
	desc: 'THEA-DCT poster used during the 16th December 2022 handover ceremony of the project to the Ministry of Health'
  },
  {
    title: 'THEA-DCT Technology presentation',
	url: 'https://raw.githubusercontent.com/project-thea/project-thea-website/master/src/assets/THEA-DCT-Technology-Presentation.pdf',
	desc: 'THEA-DCT technology presentation used during the 16th December 2022 handover ceremony of the project to the Ministry of Health'
  },
];

class ProgresTimeline extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
	  console.log("item:", item);
      return (
        <Col key={i.toString()}>
          <Row>
            <Col span={24}>
			<List
				itemLayout="horizontal"
				dataSource={resourceList}
				renderItem={item => (
				  <List.Item>
					<List.Item.Meta
					  avatar={<FilePdfOutlined />}
					  title={<a href={item.url}> <FilePdfOutlined /> {item.title}</a>}
					  description={item.desc}
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
