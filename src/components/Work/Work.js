import React from 'react'
import Carousel from 'react-bootstrap/lib/Carousel';
import banner from './beijing.png'
import back from './beijing.png'
import pack from './beijing.png'
import './bootstrap.css'
import './style.css'


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className='section work'>
        <h1>工作经历</h1>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={back}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>杭州大喵科技有限公司</h5>
              <p>
                2018.3 -2019.2
                （前端工程师）
              </p>
              <p>	
                <li>负责快速构建高质量移动APP/PC/微信页面</li>
                <li>根据业务需求设计合适的工程项目</li>   
                <li>高度组件化、模块化思维，拥有各平台调试能力</li>
                <li>同期学习ES6及vue,react,体会函数式编程思想</li>  
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>中国移动西藏公司</h5>
              <p>
              2014.8 -2018.12
              （产品经理）
              </p>
              <p>
                <li>负责地市集团产品年度指标划分</li>
                <li>支撑各项集团产品的售前，售中，售后工作</li>
                <li>ICT项目支撑</li>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ControlledCarousel