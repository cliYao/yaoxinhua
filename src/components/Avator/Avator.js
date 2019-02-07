import React from 'react'
import { Wrapper,Cont} from './style'
import yaoxinh from '../../static/yaoxinh.jpg'
import Particles from 'react-particles-js';

import github from '../../static/github.svg'
import zhihu from '../../static/zhihu.svg'
import zhanku from '../../static/zhanku.svg'

import './styles.css'

const ParticlesContainer = (props) => (
  <Particles
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
);

class Avator extends React.Component {
  render() {
    const data = [{url:github,id:1},{url:zhihu,id:2,},{url:zhanku,id:3,}]
    return (
      <div className="section Avator">
        <Wrapper>
          <img className="pic"src={yaoxinh} alt=""/ >
          <div className='AvatorCenter'>
            <h1>姚新华</h1>
          </div>
            <p>前端新人，请多指教</p>
            <div className='content'>
          {
            data.map(item => 
            <a href="/">
              <Cont key={item.id} >
                
                <img src={item.url} style={item.width} alt=""/>

              </Cont> </a>  
            )
          }
        </div>
        </Wrapper>

        <span className="arrow">👇</span>
        
      </div>
    );
  }
}
export default Avator
