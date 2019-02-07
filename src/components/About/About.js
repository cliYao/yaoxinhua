import React from 'react'
import { Wrapper,Cont } from './style'
import birthday from '../../static/birthday.svg'
import education from '../../static/education.svg'
import nowCity from '../../static/nowCity.svg'
import email from '../../static/email.svg'
import phone from '../../static/phone.svg'
import company from '../../static/company.svg'
import Particles from 'react-particles-js';

import './styles.css'

  

const ParticlesContainer = (props) => (
<Particles
    style={{
      position: "absolute",
      left: 110,
      right: 0,
      bottom: 0,
      top: 0
    }}
    params={{
	    "particles": {
	        "number": {
	            "value": 60
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
);




class About extends React.Component {
  render() {
    const data = [{url:birthday,word:'1992.4.16',id:1},{url:education,word:'重庆邮电大学/电子商务',id:2},{url:nowCity,word:'坐标/杭州',id:3},{url:email,word:'568077487@qq.com',id:4},{url:phone,word:'18289165701',id:5},{url:company,word:'暂无',id:6}]
    return (
      <div className="section about">
        <h1>自我介绍</h1>
        <p className="jianshao">一年全职前端开发经验,熟悉MV*开发,深谙自动化,模块化开发之道,高效的自学能力,具备独立分析解决问题能力</p>
        <div className='content detail'>
          {
            data.map(item => 
              <Cont key={item.id}>
                <img src={item.url} alt=""/>
                <p className='word'>{item.word}</p>
              </Cont>   
            )
          }
        </div>
        <ParticlesContainer />


      </div>
    );
  }
}

export default About

