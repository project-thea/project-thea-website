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
				<Timeline.Item label="September 2022"  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
				Community engagement at Mutukula
								</Timeline.Item>

				<Timeline.Item label="August 2022" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					Inspectin of ports of entry and exit</Timeline.Item>
					
					<Timeline.Item >
					  
					  Stakeholder engagement meeting held on 26th August 2020 at Hotel Africana
					</Timeline.Item>
				

				<Timeline.Item label="July 2022"  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					Community engagement at Nalukolongo trucks parking
								</Timeline.Item>
				<Timeline.Item label="March 2022"  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
				Community outreach and sensitization at the Malaba Kenya-Uganda border
						  </Timeline.Item>
				<Timeline.Item label="February 2022"  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
				Driver recruitment at the Malaba Kenya-Uganda border point.
						  </Timeline.Item>

				<Timeline.Item label="January 2022"  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
				Driver recruitment at Mukwano Industries
					</Timeline.Item>


					<Timeline.Item label="December 2021"  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
					  Training at ports of entry and exit
					</Timeline.Item>

					<Timeline.Item label="November 2021 - December 2021"
					dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					Community engagement campaign (vaccination and testing)</Timeline.Item>

					<Timeline.Item label="October 2021 - November 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
					  Awareness and sensitisation of stakeholders
					</Timeline.Item>
					
					
					
					<Timeline.Item label="September 2021 - August 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					Stakeholder engagement meeting with the National Logistic Platform</Timeline.Item>
					
					
					<Timeline.Item label="August 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					Inspectin of ports of entry and exit</Timeline.Item>
					
					<Timeline.Item >
					  
					  Stakeholder engagement meeting held on 1st July 2021 at Imperial Royal hotel
					</Timeline.Item>
					
					<Timeline.Item>
					 
					  Integration of THEA-C19 platform with National Health Infrastructure
					</Timeline.Item>
					
					<Timeline.Item label="July 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  Ethics approval
					</Timeline.Item>
					
					<Timeline.Item>
					  Review and rebuttal for ethical application
					</Timeline.Item>
					
					<Timeline.Item label="April 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
					  Updates to THEA-C19 DCT
					</Timeline.Item>
					
					<Timeline.Item>
					  Ethical approvals application
					</Timeline.Item>
					
					<Timeline.Item label="March 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  Completion of contracts and procurement process
					</Timeline.Item>
					
					<Timeline.Item label="January 2021" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
					  Update of THEA-C19 prototype
					</Timeline.Item>
					
					<Timeline.Item label="December 2020 " dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
					  
					  Administrative approvals from the Ministry of Health
					</Timeline.Item>
					
					<Timeline.Item >
					  Inception meeting online
					</Timeline.Item>
					
					<Timeline.Item label="November 2020" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
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
