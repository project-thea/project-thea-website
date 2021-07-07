import React from 'react';
import logoImg from '../images/logo_text_colored.svg';
import logoWhiteImg from '../images/logo_text_white.svg';
//import networkImg from '../images/network_structure.png';
import phoneTrackingImg from '../images/phone_tracking.png';
import bodastageLogo from '../images/logo-bodastage.svg';
import RoslinLogo from '../images/roslin.png';
import mukLogo from '../images/muk.jpg';
import mohLogo from '../images/moh.png';
import psfuLogo from '../images/psfu_logo.png';
import THEALogo from '../images/THEA_LOGO.png';
import EdinInfoLogo from '../images/edinburgh_informatics.png';
import NIHRLogo from '../images/nihr_logo.png';
import UKRILogo from '../images/ukri_logo.png';
import mowtLogo from '../images/mowt_logo.png';
import { AndroidOutlined, LinkOutlined } from '@ant-design/icons';

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
	 children: logoImg
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },

      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#Feature1_0',
          children: [
            {
              children: (
                <span>
                  <p>About</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#Content12_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Partners</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#Content12_1',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Funders</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: 'https://github.com/project-thea/',
          children: [
            {
              children: (
                <span>
                  <p>Github</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item5',
        className: 'header3-item',
        children: {
          href: 'https://demo.project-thea.org',
          children: [
            {
              children: (
                <span>
                  <p>Demo</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Project THEA</p>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <span>
              <span>
                <p>Tracking haulage in East Africa to control COVID-19</p>
              </span>
            </span>
          </span>
        ),
      },
      //{
      //  name: 'content',
      //  className: 'banner5-content',
      //  children: (
      //    <span>
      //      <span>
      //        <span>
      //          <span>
      //            <p>
      //              An open source pandemic modelling platform using trucking
      //              data
      //            </p>
      //          </span>
      //        </span>
      //      </span>
      //    </span>
      //  ),
      //},
		{
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          //href: 'https://github.com/project-thea/mobile-app/releases',
		  href: 'https://github.com/project-thea/mobile-app/releases/download/v0.0.2/thea-c19-v0.0.2.apk',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <span>
              <p><AndroidOutlined /> Get mobile app</p>
            </span>
          ),
        },
      },
	  {
        name: 'button',
        className: 'banner5-button-wrapper2',
        children: {
		  href: 'https://demo.project-thea.org',
          className: 'banner5-button',
          //type: 'default',
          children: (
            <span>
              <p><LinkOutlined /> Try server demo</p>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
	  THEALogo
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
	children: phoneTrackingImg
  },
  textWrapper: { className: 'content1-text', md: 28, xs: 24 },
  //textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>About the project</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <p>
Project-THEA aims to deliver an open access mobile application to support track and trace tailored to the haulage industry. The tool is designed to combine anonymized time-stamped geo-location information relative to the road infrastructure with COVID-19 test results, to not only support public health efforts to limit transmission but also the safe reopening of economies. Critically the efficiency in track and trace enhances the flow of the regional supply chain as well as strategic allocation of public health surveillance resources. 
          </p>
		  <p>
		  <strong>NB:</strong> The tool is open access but the data access is limited to public health institutions. This way its use is not limited to East Africa.
		  </p>
        </span>
      </span>
    ),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Features</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>The platform has the following features</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Pandemic modelling</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>Modelling of multiple disease spread patterns</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Health Certificate Issuing</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        Issuing of certificate of good health to track drivers
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Web and mobile</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>Access from multiple interfaces i.e. web, mobile, and tab</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Data Privacy</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>Use of biometric&nbsp;</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Thirdy party integration</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Integration with third party systems to enrich the data and
                    analysis
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Predictive Analysis</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Use of machine learning and big data to provide actionable
                  reports&nbsp;
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Team</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Adrian Muwonge</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>Roslin institute</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>Design and disease dynamics Modelling</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Mark Bronsvoort</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <p>Roslin institute</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Design and disease dynamics Modelling</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Thibaud Porphyre</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>Roslin institute</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>Design and disease dynamics Modelling</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Emmanuel Ssebaggala</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>Bodastage Solutions Limited</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>Technology Partner</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Ibrahim Mugerwa</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>Ministry of Health Uganda</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>COVID-19 Testing</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>TBC</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>Ministry of Transport of Uganda</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: (
                <span>
                  <p>Haulage network</p>
                </span>
              ),
            },
          ],
        },
      },
      //{
      //  name: 'block6',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  image: {
      //    name: 'image',
      //    className: 'teams2-image',
      //    children:
      //      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
      //  },
      //  titleWrapper: {
      //    className: 'teams2-textWrapper',
      //    children: [
      //      { name: 'title', className: 'teams2-title', children: '叶秀英' },
      //      {
      //        name: 'content',
      //        className: 'teams2-job',
      //        children: '公司+职位 信息暂缺',
      //      },
      //      {
      //        name: 'content1',
      //        className: 'teams2-content',
      //        children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
      //      },
      //    ],
      //  },
      //},
      //{
      // name: 'block7',
      // className: 'block',
      // md: 8,
      // xs: 24,
      // image: {
      //   name: 'image',
      //   className: 'teams2-image',
      //   children:
      //     'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
      // },
      // titleWrapper: {
      //   className: 'teams2-textWrapper',
      //   children: [
      //     { name: 'title', className: 'teams2-title', children: '韩勇' },
      //     {
      //       name: 'content',
      //       className: 'teams2-job',
      //       children: '公司+职位 信息暂缺',
      //     },
      //     {
      //       name: 'content1',
      //       className: 'teams2-content',
      //       children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
      //     },
      //   ],
      // },
      //},
      //{
      //  name: 'block8',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  image: {
      //    name: 'image',
      //    className: 'teams2-image',
      //    children:
      //      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
      //  },
      //  titleWrapper: {
      //    className: 'teams2-textWrapper',
      //    children: [
      //      { name: 'title', className: 'teams2-title', children: '叶秀英' },
      //      {
      //        name: 'content',
      //        className: 'teams2-job',
      //        children: '公司+职位 信息暂缺',
      //      },
      //      {
      //        name: 'content1',
      //        className: 'teams2-content',
      //        children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
      //      },
      //    ],
      //  },
      // },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Partners</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
		href: 'https://www.ed.ac.uk/roslin',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: RoslinLogo,
			width: 200
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
	    href: 'https://www.bodastage.com/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: bodastageLogo,
			width: 120
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
		href: 'https://www.mak.ac.ug/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: mukLogo,
			width: 160
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
		href: 'https://www.ed.ac.uk/informatics/blockchain',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: EdinInfoLogo,
			width: 250
          },
        },
      },
      //{
      //  name: 'block5',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children:
      //        'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
      //    },
      //  },
      //},
    ],
  },
};

export const Content121DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Funders</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 12,
        xs: 24,
		href: 'https://www.nihr.ac.uk/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: NIHRLogo,
			width: 200
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 12,
        xs: 24,
	    href: 'https://mrc.ukri.org/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: UKRILogo,
			width: 200
          },
        },
      },
      //{
      //  name: 'block3',
      //  className: 'block',
      //  md: 6,
      //  xs: 24,
		//href: 'https://www.mak.ac.ug/',
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children: mukLogo,
		//	width: 160
      //    },
      //  },
      //},
      //{
      //  name: 'block4',
      //  className: 'block',
      //  md: 6,
      //  xs: 24,
		//href: 'https://www.ed.ac.uk/informatics/blockchain',
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children: EdinInfoLogo,
		//	width: 250
      //    },
      //  },
      //},
      //{
      //  name: 'block5',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children:
      //        'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
      //    },
      //  },
      //},
    ],
  },
};

export const Content122DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>With support from</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
		href: 'https://www.health.go.ug/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: mohLogo,
			width: 150
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
	    href: 'https://www.psfuganda.org/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: psfuLogo,
			width: 200
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
		href: 'https://www.works.go.ug/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: mowtLogo,
			width: 160
          },
        },
      },
      //{
      //  name: 'block4',
      //  className: 'block',
      //  md: 6,
      //  xs: 24,
		//href: 'https://www.ed.ac.uk/informatics/blockchain',
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children: EdinInfoLogo,
		//	width: 250
      //    },
      //  },
      //},
      //{
      //  name: 'block5',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children:
      //        'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
      //    },
      //  },
      //},
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          //children:
		  //'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
		  children: 'Project-THEA'
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>Tracking haulage in East Africa to control COVID-19</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Resources' },
        childWrapper: {
          children: [
            //{
            //  name: 'link0',
            //  href: '#',
            //  children: (
            //    <span>
            //      <span>
            //        <p>Publications</p>
            //      </span>
            //    </span>
            //  ),
            //},
            { name: 'link1', href: 'https://github.com/project-thea/', children: 'Github' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Contact' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'support@project-thea.org' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>Social Media</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://twitter.com/project-thea',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Twitter</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>© 2020 Project-THEA.&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
