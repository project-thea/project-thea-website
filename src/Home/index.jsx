/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Banner5 from './Banner5';
import Feature1 from './Feature1';
import Content3 from './Content3';
import Teams2 from './Teams2';
import Content12 from './Content12';
import Footer1 from './Footer1';

import {
  Nav30DataSource,
  Banner50DataSource,
  Feature10DataSource,
  Content30DataSource,
  Teams20DataSource,
  Content120DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      //<Nav3
      //  id="Nav3_0"
      //  key="Nav3_0"
      //  dataSource={Nav30DataSource}
      //  isMobile={this.state.isMobile}
      ///>,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      //<Feature1
      //  id="Feature1_0"
      //  key="Feature1_0"
      //  dataSource={Feature10DataSource}
      //  isMobile={this.state.isMobile}
      ///>,
      //<Content3
      //  id="Content3_0"
      //  key="Content3_0"
      //  dataSource={Content30DataSource}
      //  isMobile={this.state.isMobile}
      ///>,
      //<Teams2
      //  id="Teams2_0"
      //  key="Teams2_0"
      //  dataSource={Teams20DataSource}
      //  isMobile={this.state.isMobile}
      ///>,
      //<Content12
      //  id="Content12_0"
      //  key="Content12_0"
      //  dataSource={Content120DataSource}
      //  isMobile={this.state.isMobile}
      ///>,
      //<Footer1
      //  id="Footer1_0"
      //  key="Footer1_0"
      //  dataSource={Footer10DataSource}
      //  isMobile={this.state.isMobile}
      ///>,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
