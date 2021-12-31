import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Button } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';

class Teams2 extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          <Row>
            <Col span={24}>
              <div {...image}>
                <img src={image.children} alt="img" />
              </div>
            </Col>
		  </Row>
		  <Row>
            <Col span={24}>
              <QueueAnim {...titleWrapper} type="bottom">
                {titleWrapper.children.map(getChildrenToRender)}
              </QueueAnim>
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
                {listChildren}
              </QueueAnim>
            </QueueAnim>
          </OverPack>
		<div className="team2">
			<Button type="primary" shape="round" onClick={() => {window.location.href="/blog.html";}}>More articles</Button>
		</div>
        </div>

		<div>
		</div>
      </div>
    );
  }
}

export default Teams2;
