import React from 'react';
import { Col, Row, Divider } from 'antd';
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
import pillarsImg from '../images/pillars.png';
import imgTeam1 from '../images/first_consultative_delegates.jpg';
import imgPoE1 from '../images/poe_visit_1.png';
import imgMpondwe  from '../images/mpondwe_peo.jpeg';
import imgImmunise from '../images/immunisation.jpeg';
import impSensitisation from '../images/sensitization.jpeg';
import mukwanoJan2022 from '../images/mukwano_jan_2022.jpeg';
import malabaFeb2022 from '../images/malaba_feb2022.jpeg';
import malabaMar2022 from '../images/malabaMarch2022.jpeg';
import nalukolongo2022 from '../images/nalukolongo_july2022.jpeg';
import namanve04082022 from '../images/namanve_04082022.jpeg';
import mutukula14092022 from '../images/mutukula_14092022.jpg';
import africana from '../images/africana.jpg';
import handover01 from '../images/thea-dct-handover.jpeg';
import handover02 from '../images/handover02.jpeg';
import handover03 from '../images/handover03.jpeg';
import handover04 from '../images/handover04.jpeg';
import handover05 from '../images/handover05.jpeg';
import handover06 from '../images/handover06.jpeg';
import handover0 from '../images/handover0.jpeg';
import handover8 from '../images/handover8.jpeg';

export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
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
  wrapper: { className: 'home-page-wrapper' },
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
        <p>THEA-C19 Project Pillars</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
	<div>
          <p>
THEA-C19 is an 18 months research project funded by Medical Research council and National
Institutes of Health Research, the first of its kind on the African continent. The project is co-led
by principle investigators from Makerere and Edinburgh University, partnering with the
Ministry of Health(MOH) and Bodastage solutions in Uganda. The activities are supported by
the Ministry of Works and Transport and the National logistics platform.
<br /><br />
          </p>
			  
			<p>
				<img src={pillarsImg} width="80%" alt="img" />
				<br /><br />
			</p>
<p>
The figure shows the four pillars of the project and where the stakeholder fit into the project
pillars. The project is designed to generate stakeholder input for the technology
development(“technology contextualisation”) through consultative meetings. The technology
development pillar is led by Bodastage solutions with input from the Blockchain technology
laboratory in Edinburgh and Makerere University. The tool will then be tested on the primary
stakeholder i.e. haulage truck drivers, the data generated will be analysed to provide critical
feedback to the relevant stakeholders.
          </p>
		</div>
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
            <p>Blog</p>
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
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null
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
                      <p><a href="blog.html?article=0">Consultating stakeholders</a></p>
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
                  <p><strong>August 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
The THEA team organized a stakeholder’s workshop that brought together experts from different fields to share knowledge and experiences regarding the implementation, the ethical and legal implications of using a mobile surveillance tool. Read more...
				</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
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
                        <p><a href="blog.html?article=1">Inspecting Ports of entry and exit</a></p>
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
                    <p><strong>August 2021</strong></p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
In order to understand the complexity of the process involved in crossing Uganda’s frontiers, we visited POEs, including Malaba and Elegu. Read more ...
					</p>
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
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
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
                        <p><a href="blog.html?article=3">Awareness and sensitization campaign </a></p>
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
                  <p><strong>September-November 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
		In order to engage the truck drivers effectively, there was a need to create awareness about what-were are doing, why -we are doing this, and how the drivers and their sector benefits. Read more ...				  
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=4">Supporting the COVID-19 vaccination campaign</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>November and December 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Vaccination is a critical tool for the control of COVID-19, our engagement with truck drivers revealed that they were not keen on lining up with the general public as this took a lot of time which they did not have given their routine. Read more...
				  </p> 
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=0">Training staff at POEs and Laboratories</a></p>
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
                          <p><strong>December 2021</strong></p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Together with the technical team at MoH, the THEA team visited Malaba and Elegu POEs to train the port staff and laboratory personnel. Read more...
				  </p>
				  
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=5">Way forward to 2022</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
As part of our trial of the digital tool, we have started onboarding truck drivers onto the tool and have more than 100 on the system so far. This trial allows checking that all the systems are ready to go. We expect to start a full driver recruitment drive in January 2022, and this will be done for eight months with a target of 30,000 drivers on the system
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=6">Driver recruitment at Mukwano Industries</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>January 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
					The THEA team held a one week driver recruitment event at Mukwano Industries 
					truck parking yard. At the same time, the team coordinated with the Ministry of Health team 
					and Kampala City Council to have an immunsation tent to provide Covid-19 immunisation 
					for the truck drivers and the surrounding community.
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=7">Driver recruitment at the Malaba Kenya-Uganda border point. </a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>February 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
					The THEA team held a three day driver recruitment event at the Malaba point of entry.  Training was provided for the 
					recruitment teams at the private labs as well as the port health personel. 
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=8">Community outreach and sensitization  at the Malaba Kenya-Uganda border</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>March 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
					The THEA team held community sensitisation events about Covid-19 and it's immunisation 
					to educate the community on it's benefits as well as the standard operating procedures.
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=9">Community engagement at Nalukolongo trucks parking</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>25<sup>th</sup>July 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
					The THEA team held community sensitisation events about Covid-19 and it's immunisation 
					to educate the community on it's benefits as well as the standard operating procedures.
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  //10
      {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=10">Community engagement at Namanve trucks parking yard</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>4th August 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
					The THEA team held community sensitisation events about Covid-19 and it's immunisation 
					to educate the community on it's benefits as well as the standard operating procedures.
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  //11
     {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=11">THEA Workshop at Hotel Africana</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>26<sup>th</sup> August 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
					The THEA team held a workshop with various stakeholders to review the project and technology. 
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  //12
     {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=12">Community engagement at Mutukula</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>13 <sup> th</sup><strong>September 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>The THEA team held community sensitisation events with the community and truck drivers. Mutukula is approximately 224 kilometers by road, south-west of Kampala, the capital and largest city of Uganda. 

                  </p>
                </span>
              ),
            },
          ],
        },
      },
	  //13
     {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p><a href="blog.html?article=13">Handover ceremony to the Ministry of Health</a></p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>16 <sup> th</sup><strong>December 2022</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>The THEA team together with it's partners held a handover ceremony of the digital contact tracing platform to the ministry of Health.

                  </p>
                </span>
              ),
            },
          ],
        },
      },
	 

       


    ],
  },
};
export const Articles20DataSource = {
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
            <p>Blog</p>
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
        name: 'block4',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Training staff at POEs and Laboratories</p>
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
                          <p><strong>December 2021</strong></p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Together with the technical team at MoH, the THEA team visited Malaba and Elegu POEs to train the port staff and laboratory personnel. The personnel were trained to help drivers install the mobile application. They were trained on how to respond to drivers' questions and ensure informed consent to participate. We also provide a troubleshooting guideline with solutions for issues that could arise during the installation and enrolment onto the system. Such issues included no smartphone, an older android version, a driver having a cracked screen, antagonistic phone settings. We also conducted a practical session where the trained personnel would try to recruit a driver onto the system to demonstrate the data flow. These visits allowed the team to appreciate the differences in process at each POE, for example, internet connectivity issues at Mpondwe, low traffic at Mutukula and unregistered drivers on RECDTS at Elegu.
				  </p>
				  <img src={imgMpondwe} width="100%"/> <br />
				  <br />
				  
				  <p>
				  <span style={{fontStyle: 'italic'}}>
The THEA-C19 and MOH technical team training laboratory personnel on how to use the application at Mpondwe border.
</span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block0',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null
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
                      <p>Consultating stakeholders</p>
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
                  <p><strong>August 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
The THEA team organized a stakeholder’s workshop that brought together experts from different fields to share knowledge and experiences regarding the implementation, the ethical and legal implications of using a mobile surveillance tool. This was followed by several consultative meetings with key players in the haulage sector and officials in the Ministry of Health (Uganda). This way, we develop technology that can respond to the needs of the community (truck drivers) and support public health contact tracing. From these interactions, we have been able to get more ideas that necessitated modifications to the tool to appeal to the different stakeholders.
				  </p>
				  <br />
				  <p>
				  <img src={imgTeam1} width="100%"/> <br />
				  <span style={{fontStyle: 'italic'}}>
				  First consultative meeting held at Imperial Royal hotel on 17th August 2021. We had a wide range of expertise from the legal, ethics, socio-anthropology, public health, information technology, haulage sector and academia
				  </span>
				  </p>
				  <br />
				  <p>
These meetings highlighted some challenges, which meant that the THEA-C19 team had to engage further with the primary stakeholders via the National Logistics Platform. We appreciate that this will be an ongoing consultative process. However, this has taken a little more time than anticipated, getting all on board to appreciate this great innovation. Consequently, we are still in the consultation here but have broadened this remit to accommodate the diversity of views and mandates.
					</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
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
                        <p>Inspecting Ports of entry and exit</p>
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
                    <p><strong>August 2021</strong></p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
In order to understand the complexity of the process involved in crossing Uganda’s frontiers, we visited POEs, including Malaba and Elegu. We held meetings with the Ministry of Health Port health, District officials and the private laboratories mandated to carry out COVID-19 diagnostics in Uganda. This visit allowed us to map the process that THEA-C19 would augment.
					  </p>
					  
					  <p>
					  <img src={imgPoE1} /> <br />
					  <span style={{fontStyle: 'italic'}}>
					  THEA-C19 team visiting POEs, these include Mutukula, Mpondwe, Elegu and Malaba. The photos were taken at Mutukula and Mpondwe
					  </span>



					  </p>
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
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
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
                        <p>Awareness and sensitization campaign </p>
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
                  <p><strong>September-November 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
		In order to engage the truck drivers effectively, there was a need to create awareness about what-were are doing, why -we are doing this, and how the drivers and their sector benefits link https://project-thea.org/resources.html 
This was done by talking to truck drivers at their workstations, understanding their fears and concerns but importantly, what utility they wanted from the digital tool. We have carried out such campaigns at Nalukolongo parking yard and at <a href="http://www.mukwano.com">Mukwano industries ltd</a>
				  </p>
				  <br />
				  <img src={impSensitisation} width="100%"/>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Supporting the COVID-19 vaccination campaign</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>November and December 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Vaccination is a critical tool for the control of COVID-19, our engagement with truck drivers revealed that they were not keen on lining up with the general public as this took a lot of time which they did not have given their routine. This is why few of them had been vaccinated; we then requested the Ministry of Health to conduct a mobile vaccination drive to bring this service directly to the truck drivers. This would allow us to contribute to rapid control of this disease and recruit drivers for the trial. We are glad to report that these efforts have allowed the vaccination of 1800 drivers and their close relations to date. We anticipate extending this to various POEs would help vaccinate up to 10,000.
				  </p> <br />
				  <img src={imgImmunise} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  Vaccination campaign supported by THEA-C19 project which has registered 1800 vaccination, 70% being the first jab. These activities were made possible by the ministry of health via the Kampala city authority health unit. The photos show enthusiastic drivers and their close families being vaccinated.
				  </span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },

      {
        name: 'block5',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Way forward to 2022</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
As part of our trial of the digital tool, we have started onboarding truck drivers onto the tool and have more than 100 on the system so far. This trial allows checking that all the systems are ready to go. We expect to start a full driver recruitment drive in January 2022, and this will be done for eight months with a target of 30,000 drivers on the system
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  
      {
        name: 'block6',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Driver recruitment at Mukwano Industries</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
The THEA team held a one week driver recruitment event at Mukwano Industries truck parking yard. At the same time, the team coordinated with the Ministry of Health team and Kampala City Council Authority to have an immunsation tent to provide Covid-19 immunisation for the truck drivers and the surrounding community.
				  </p>
<br />
				  <img src={mukwanoJan2022} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  THEA team explaining how the THEA platform works to truck drivers of Mukwano Industries.
				  </span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  
      {
        name: 'block7',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Driver recruitment at the Malaba Kenya-Uganda border point.</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
The THEA team held a three day driver recruitment event at the Malaba point of entry. Training was provided for the recruitment teams at the private labs as well as the port health personnel.
				  </p>
<br />
				  <img src={malabaFeb2022} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  Malaba Kenya-Uganda Border
				  </span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  
      {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Community outreach and sensitization at the Malaba Kenya-Uganda border</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
The THEA team held community sensitisation events about Covid-19 and it's immunisation to educate the community on it's benefits as well as the standard operating procedures.
				  </p>
<br />
				  <img src={malabaMar2022} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  THEA team holding sensitisation sessions with the community.
				  </span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Community engagement at Nalukolongo trucks parking</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p> 25<sup>th</sup> July 2022 -The THEA team held community sensitisation events about Covid-19 and it's immunisation to educate the community on it's benefits as well as the standard operating procedures.
				  </p>
<br />
				  <img src={nalukolongo2022} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  THEA team holding sensitisation sessions with the community.
				  </span>
				  </p>
          <p>The THEA team was led by Dr. Christine Mbabazi Mpyangu and Dr. Lubega Robert managed to sensitize over 80 truck drivers at Nalukolongo truck parking station over COVID-19 and other health related issues. The THEA team was seeking to develop and test a digital contact-tracing tool. The novelty here is in its enhanced privacy using a unique universal identifier (UUID), digital -tracking boundary defined by the road infrastructure and simplicity based on conventional time- stamped GPS. In addition, we examine the ethical and legal context of deploying such a tool.
				  </p>
                </span>
              ),
            },
          ],
        },
      },

      ///nalukolgo part end 
     {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>4th August 2022 - Community engagement of truck drivers of Namanve parking yard</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
				The THEA team had the opportunity to interact with over 200 truck drivers that have organized themselves into an association with the main intention of looking for jobs, but also share experiences and encourage one another in the trade. This team shared their candid experiences with COVID-19,  both on the job and beyond to the communities where they live. We had such an interesting time with this group.
				  </p>
<br />
				  <img src={namanve04082022} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  THEA team holding sensitisation sessions with the community.
				  </span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  
	  //11
    {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>26<sup>th</sup> August 2022 - The THEA team held a workshop with various stakeholders to review the project and technology.</p>
                 
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
				The THEA team held a workshop with various stakeholders to review the project and technology. The group discussed 
				various challenges related to recruitment and the technology as a whole. Teams from the different points of entry were represented. 
				
				  </p>
          <br />
				  <img src={africana} width="100%"/>
          <span style={{fontStyle: 'italic'}}>
				  THEA team holding sensitisation sessions at hotel Africana kampala.
				  </span>
                </span>
              ),
            },
          ],
        },
      },
	  
     {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>13<sup>th</sup> September 2022 - Community engagement of truck drivers at Mutukula point of entry</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p> The THEA team held community sensitisation events with the community and truck drivers. Mutukula is approximately 224 kilometers by road, south-west of Kampala, the capital and largest city of Uganda. The town of Mutukula is a border town between Uganda and Tanzania. It is an important border post and major crossing point, for both human and commercial traffic. The border post between both countries merged operations on both sides. Vehicles and passengers clear customs and immigration once, in the country they are entering.
				  </p>
<br />
				  <img src={mutukula14092022} width="100%"/>
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  THEA team holding sensitisation sessions with the drivers.
				  </span>
				  </p>
          <p> Most truckers mentioned doing crossborder trips; Uganda to Tanzania, Uganda to Congo but also inland; across the country; depending on where business is; Lira, Arua, all over Uganda.These transport goods ranging from petroleum, to food stuff to other non-perishables.
				  </p>
                </span>
              ),
            },
          ],
        },
      },
	  //13
	  {
        name: 'block8',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>16<sup>th</sup> December 2022 - The THEA team together with it's partners held a handover ceremony of the digital contact tracing platform to the ministry of Health.</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
				<div>
					<Row gutter={16}>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover01} width="100%"/>
							<span>THEA Project team with the guests</span>
							<br />
						</Col>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover02} width="100%"/>
							<span>Mr. Mukama, a truck driver of 28 years, briefly shared a touching testimony of his life as a truck driver</span>
						</Col>
					</Row>
					
					<Row gutter={16}>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover0} width="100%"/>
							<span>Dr. Adrian Muwonge, the project PI presenting the project background.</span>
							<br />
						</Col>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover8} width="100%"/>
							<span>Eng. Emmanuel Robert Ssebaggala, the Technology Lead, presenting the DCT technology.</span>
						</Col>
					</Row>
					
					<Row gutter={16}>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover03} width="100%"/>
							<span>Dr. Christine M. Mpyangu presenting practical sociological experiences associated with DCT as shared in Naluwerere, Namanve, Elegu, Mutukula and Malaba communities.</span>
						</Col>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover04} width="100%"/>
							<span>Dr. Erisa Mwaka, articulating the ethical perspectives associated with DCT utilization in Uganda. He was presenting findings from a recent field work</span>
						</Col>
					</Row>
				
					<Row gutter={16}>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover05} width="100%"/>
							<span>Dr. Kyabayinze Daniel, Director of Public Health - MoH giving his key note speech before accepting the mobile app from THEA - DCT project</span>
						</Col>
						<Col className="gutter-row" xs={24} sm={24} md={12}>
							<img src={handover06} width="100%"/>
							<span>Commissioner, Winstone Katushabe , Dr. Kyabayonze Daniel - Director Public Health MoH, Dr Adrian as P.I and Ass. Prof. Erisa Mwaka - Co investigator grace the Ocassion</span>
						</Col>
					</Row>
				</div>
              ),
            },
          ],
        },
      },
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
              href: 'https://twitter.com/thea_c19',
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
        <span>© 2022 Project-THEA.&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};