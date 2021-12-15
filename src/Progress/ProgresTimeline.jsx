import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Timeline, Typography } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

class ProgresTimeline extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()}>
          <Row>
            <Col span={24}>
				<Timeline>
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  <Text italic>13th December 2021 - 14th December 2021</Text><br />
					  POE visit this week Elegu Malaba
					</Timeline.Item>

					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					<Text italic>29th November 2021</Text><br />Awareness campaign and vaccinations support in Nalukolongo and Mukwano Industries</Timeline.Item>

					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  <Text italic>2nd November 2021</Text><br />
					  POE visits in November (Mutukula Mpondwe)
					</Timeline.Item>
					
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					<Text italic>1st July 2021</Text><br />
					Start of POE visits; Malaba and Eleju visited.</Timeline.Item>
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					<Text italic>17th July 2021</Text><br />
					Virtual meeting with NLP committee two weeks later</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  1st July 2021 <br />
					  Stakeholder engagement meeting held on 1st July 2021 at Imperial Royal hotel
					</Timeline.Item>
				  </Timeline>
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
