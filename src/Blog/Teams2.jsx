import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';


class Teams2 extends React.PureComponent {
	
  constructor(props) {
    super(props);
	const params = new URLSearchParams(window.location.search); 
	this.articleId = params.get('article');
  }
	
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
	
      return (
        <Col key={i.toString()} {...$item} >
          <Row>
            <Col span={24} style={{borderBottom: 2, borderColor: '#000'}}>
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
    const { dataSource, dataSource2 } = props;
    delete props.dataSource;
	delete props.dataSource2;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
	const listChildren2 = this.getBlockChildren(dataSource2.block.children);
	
	console.log("this.articleId:", this.articleId);
	if (this.articleId){
		return (
		  <div {...props} {...dataSource2.wrapper}>
			<div {...dataSource2.page}>
			  <div {...dataSource2.titleWrapper}>
				{dataSource2.titleWrapper.children.map(getChildrenToRender)}
			  </div>
			  <OverPack {...dataSource2.OverPack}>
				<QueueAnim type="bottom" key="tween" leaveReverse>
				  <QueueAnim
					type="bottom"
					key="block"
					{...dataSource2.block}
					component={Row}
				  >
					{listChildren2[this.articleId]}
				  </QueueAnim>
				</QueueAnim>
			  </OverPack>
			</div>
		  </div>
		);
	}
	
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
        </div>
      </div>
    );
  }
}

export default Teams2;
