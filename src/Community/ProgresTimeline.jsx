import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Timeline } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import { ClockCircleOutlined } from '@ant-design/icons';

class ProgresTimeline extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()}>
          <Row>
            <Col span={24}>
				<p>
In August 2021, the THEA team organized a stake holder’s workshop that brought together experts from different fields to share knowledge and experiences regarding the implementation, the ethical and legal implications of using a mobile surveillance tool. This was followed by a number of consultative meetings with key players in the haulage sector but also with officials in the Ministry of Health (Uganda). By so doing, we aimed at developing a tool that would be able to respond to the needs of the community (truck drivers) yet better still solving a prevailing problem in the health sector. It is from these interactions that we have been able to get more ideas that necessitated modifications to the tool to appeal to the different stake holders. 
</p>
<br />
<p>
This has however taken a little more time than we anticipated, getting all on board to appreciate this great innovation. Consequently, we are still in consultation here and there before we officially pilot the study. The THEA team has diversified its focus to include private truck owners; who were found to be more receptive and much more organized as compared to the union itself.
</p>
<br />
<p>
Additionally, we engaged in familiarization and learning visits to selected ports of entry and exit where we intend to pilot the study. The Thea team together with Ministry of Health Officials, particularly those in the                   Surveillance department visited Malaba, Mutuluka, Elegu and Mpondwe entry points. Here we were able to introduce ourselves to port officials, specifically those at the lab and at the reception, create awareness about our objectives and ran a demo of the tool, acquainted ourselves with the process flow and how the THEA app can be used together with the other existing systems. After the initial visits, the port teams have stayed in close contact with the THEA team, particularly the Engineer, to appreciate the tool and even do some demos. We have now registered readiness to start with a few truck drivers being on-boarded. There are anticipated challenges at the ports such as internet connectivity and data availability during the course of the study. Ports like Mpondwe do not have internet yet connectivity is crucial during installation of the app on the drivers’ phones. Other limitations to recruitment have been with the types of phones the drivers have that do not allow installation of the app.
</p>
<br />
<p>
Despite the challenges, we have registered some success in onboarding truck drivers. In early December, we started a campaign to create awareness but also recruit truck drivers onto the study. To date we have registered over 100 truck drivers, ready for the pilot at the beginning of January 2022.
</p>
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
