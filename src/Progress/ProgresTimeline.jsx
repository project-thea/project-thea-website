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
				<Timeline mode="left">
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  <Text italic>December 2021</Text><br />
					  Training at ports of entry and exit
					</Timeline.Item>

					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					<Text italic>November 2021 - December 2021</Text><br />
					Community engagement campaign (vaccination and testing)</Timeline.Item>

					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  <Text italic>October 2021 - November 2021</Text><br />
					  Awareness and sensitisation of stakeholders
					</Timeline.Item>
					
					
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					<Text italic>September 2021 - August 2021</Text><br />
					Stakeholder engagement meeting with the National Logistic Platform</Timeline.Item>
					
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					<Text italic>August 2021</Text><br />
					Inspectin of ports of entry and exit</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  August 2021 <br />
					  Stakeholder engagement meeting held on 1st July 2021 at Imperial Royal hotel
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  August 2021 <br />
					  Integration of THEA-C19 platform with National Health Infrastructure
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  July 2021 <br />
					  Ethics approval
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  July 2021 <br />
					  Review and rebuttal for ethical application
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  April 2021 <br />
					  Updates to THEA-C19 DCT
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  April 2021 <br />
					  Ethical approvals application
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  March 2021 <br />
					  Completion of contracts and procurement process
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  January 2021 <br />
					  Update of THEA-C19 prototype
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  December 2020 <br />
					  Administrative approvals from the Ministry of Health
					</Timeline.Item>
					
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  December 2020 <br />
					  Inception meeting online
					</Timeline.Item>
					
					<Timeline.Item label="November 2020" >
					  November 2020 <br />
					  Project start
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
                //component={Row}
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
