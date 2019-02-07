import React from 'react'
import Avator from '../Avator/Avator'
import About from '../About/About'
import Tech from '../Tech/Tech.js'
import Contact from '../Contact/Contact'
import ControlledCarousel from '../Work/Work'
import Project from '../Project/Project'
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


import "./styles.css";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["简介", "自我介绍", "技能","工作经历","项目","联系我"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#f4f4f4", "#516395", "#fd9874","#4c5666","#526493","#30384e"]}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <Avator></Avator>
          <About></About>
          <Tech></Tech>
          <ControlledCarousel></ControlledCarousel>
          <Project></Project>
          <Contact></Contact>
        </div>
      );
    }}
  />
);

export default App