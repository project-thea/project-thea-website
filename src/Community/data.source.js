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
import pillarsImg from '../images/pillars.png';
import teamJolobaImg from '../images/team-moses-joloba.png';
import teamAdrianImg from '../images/team-adrian-muwonge.png';
import teamMarkImg from '../images/team-bronsvoort.png';
import teamEmmaImg from '../images/team-emma.png';
import teamChristineImg from '../images/team-christine.jpeg';
import teamErisaImg from '../images/team-erisa.jpeg';
import teamEmmanuelImg from '../images/team-emmanuel.png';
import teamPlaceholderImg from '../images/placeholder.png';

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
          href: '/',
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: 'text',
            },
          ]
        },

      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: 'index.html#Feature1_0',
		  href: 'about.html',
          children: [
            {
              children: (
                <span>
                  <p>About THEA-C19</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
	  subItem: [
		{
		  children: {
			href: 'pillars.html',
			children: [
				{
				  children: (
					<span>
					  <p>Pillars</p>
					</span>
				  ),
				  name: 'text',
				},
			],
		  },
		  name: 'text',
		},
		{
		  children: {
			href: 'team.html',
			children: [
				{
				  children: (
					<span>
					  <p>Team</p>
					</span>
				  ),
				  name: 'text',
				},
			],
		  },
		  name: 'text',
		},
		{
		  children: {
			href: 'progress.html',
			children: [
				{
				  children: (
					<span>
					  <p>Progress</p>
					</span>
				  ),
				  name: 'text',
				},
			],
		  },
		  name: 'text',
		},
	  ]
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
          href: 'community-engagement.html',
          children: [
            {
              children: (
                <span>
                  <p>Community Engagement</p>
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
      //{
      //  name: 'title',
      //  children: (
      //    <span>
      //      <p>Project THEA</p>
      //    </span>
      //  ),
      //  className: 'banner5-title',
      //},
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

export const TimelineDataSource = {
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
            <p>Community Engagement</p>
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
          children: teamJolobaImg
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
                      <p>Prof. Moses Joloba</p>
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
                  <p><strong>Principle investigator | Dean of the School of Biomedical Sciences Makerere University</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Prof. Moses Joloba is the Principle investigator at Makerere University, in his capacity as Dean
of the School of Biomedical Sciences at the College of Health Sciences, he leads the molecular
laboratory which is playing a key role in national COVID-19 diagnostics as well as serosurveillance
surveys to investigate the rates of community transmission. He also advises the
MOH on pandemic and endemic disease control. In addition to the administrative work for
the projects, Moses leads the diagnostics component and works closes with Ibrahim on
contact tracing and Adrian on the epidemiological design and implementation

				  </p>
                </span>
              ),
            },
          ],
        },
      }
	 ]
  }
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
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: teamJolobaImg
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
                      <p>Prof. Moses Joloba</p>
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
                  <p><strong>Principle investigator | Dean of the School of Biomedical Sciences Makerere University</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Prof. Moses Joloba is the Principle investigator at Makerere University, in his capacity as Dean
of the School of Biomedical Sciences at the College of Health Sciences, he leads the molecular
laboratory which is playing a key role in national COVID-19 diagnostics as well as serosurveillance
surveys to investigate the rates of community transmission. He also advises the
MOH on pandemic and endemic disease control. In addition to the administrative work for
the projects, Moses leads the diagnostics component and works closes with Ibrahim on
contact tracing and Adrian on the epidemiological design and implementation

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
          children: teamAdrianImg,
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
                        <p>Dr. Adrian Muwonge</p>
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
                    <p><strong>Principle investigator | Chancellor’s fellow (Assistant Professor) Roslin institute</strong></p>
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
Dr. Adrian Muwonge is the Principle investigator at the University of Edinburgh, he is a
Chancellor’s fellow (Assistant Professor) in the areas of digital one health. Adrian supports
Stakeholders Technology Contact tracing Analysis
Consultation Feedback
Design &
Development
Recruit Test Analyze
& feedback
capacity building that targets ministries in Uganda, Kenya and Malawi through his role as the
deputy director of Fleming fund fellowships at UoE. Adrian and Moses have worked in various
infectious disease projects for twelve years. He leads the epidemiological design and
implementation of THEA-C19 and serves as the point of contact for the funders

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
          children: teamPlaceholderImg,
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
                        <p>Mr. Mugerwa Ibrahim</p>
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
                  <p><strong>Co-investigator | COVID-19 incident management team at the Ministry of Health, Uganda</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
		Mr. Mugerwa Ibrahim is a co-investigator based at the Ministry of Health. As a member of
the COVID-19 incident management team in charge of the diagnostics pillar, he leads the
contact tracing in close collaboration with Moses and Adrian on diagnostics and
epidemiological design respectively.		  
				  
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
          children: teamErisaImg,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Dr. Erisa Mwaka</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>Associate Professor of Anatomy and a consultant orthopaedic</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Dr. Erisa Mwaka is the lead on the ethics of developing and deployment of digital technology
for this projects. He is an Associate Professor of Anatomy and a consultant orthopaedic. He
chairs an Institutional ethical review board at the college of Health Sciences and a member
of the ethics team at the Uganda National council of Science and Technology. His works closes
with Christine who leads the social anthropological components of this project
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
          children: teamChristineImg,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Dr. Christine Mpyangu</p>
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
                          <p><strong>Lead of the social anthropological aspects</strong></p>
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
Dr. Christine Mpyangu is the lead of the social anthropological aspects of digital technology
uptake for this project, she also convenes the consultative activities to generate expert
opinion from the haulage sector, legal, roads and transport, software engineers and civil
society.
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
          children: teamEmmanuelImg,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Eng. Emmanuel R Ssebaggala</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>Lead for technology development</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Eng. Emmanuel R Ssebaggala leads the technology development for this project, he is the
founder and CEO of Bodastage Solutions. They are developing the digital contact tracing tools
with feedback from consultative meetings conducted by Drs Christine and Erisa. He works
closely with Prof. Aggelos Kiayias the Chair of Cyber Security and Internet security at the
School of Informatics at the University of Edinburgh. Prof. Aggelos provide expert input on
how we develop a secure digital tool to protect data generation and transmission as part of
contact tracing.
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
          children: teamMarkImg,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: 'Prof. Mark Bronsvoort' },
            {
              name: 'content',
              className: 'teams2-job',
              children: (<strong>Epidemiology and Risk assessment at the Roslin Institute</strong>),
            },
            {
              name: 'content1',
              //className: 'teams2-content',
			  className: '',
              children: (<p>
Prof. Mark Bronsvoort is a chair of Epidemiology and Risk assessment at the Roslin Institute,
University of Edinburgh, he together with Dr. Thibaud Porphyre a mathematical modeller will
support the data analysis component of this project. Beyond the intelligence built within the
digital contact tracing, data will be analysed to make inferences on individual risk and the
drivers of that risk. They leverage on experience supporting mathematical modelling to
support COVID-19 management for UK specifically Scotland.
			  </p>),
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
         children: teamEmmaImg,
       },
       titleWrapper: {
         className: 'teams2-textWrapper',
         children: [
           { name: 'title', className: 'teams2-title', children: 'Ms Emma Nabunya' },
           {
             name: 'content',
             className: 'teams2-job',
             children: (<strong>Administrative Coordinator</strong>),
           },
           {
             name: 'content1',
             className: '',
             children: (<p>Ms Emma Nabunya is employed as the administrative coordinator for all the pillars of this i.e.
diagnostics, contact tracing, epidemiology and design, technology development and
sociological components. Ms Doreen Nabasirye is the research assistant and coordinates
activities within ministry of health in liaison with Ibrahim</p>),
           },
         ],
       },
      },
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
        <span>© 2021 Project-THEA.&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
