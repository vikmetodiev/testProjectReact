import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TesterFile from "./componentsInformationTab/InformationTabFile.js";
import TodoApp from "./componentsForTodoList/todoApp.js";
import OnlineShop from "./componentsForOnlineShop/OnlineShop.js";
import Galery from "./Galery.js";
import Trivia from "./Trivia.js";
import RandomQuote from './RandomQuote.js';
import Calendar from "./Calendar.js";
import MemeGenerator from "./MemeGenerator.js";
import Tetris from "./components/Tetris.js"
import Hangman from "./hangman/Hangman.js"
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (

      <h4 style={{ color: "azure" }} className="text-center">{this.state.time}</h4>

    );
  }
}


const Navs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Todo List
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Online Shop
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Galery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Trivia
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { toggle('7'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Quotes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '8' })}
            onClick={() => { toggle('8'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Tetris
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '9' })}
            onClick={() => { toggle('9'); }}
            style={{ cursor: "pointer", backgroundColor: "black", color: "azure" }}>
            Hangman
          </NavLink>
        </NavItem>
      </Nav>
      <Clock />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Calendar />
          <Row>
            <Col sm="12">
              <TesterFile />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <TodoApp />
        </TabPane>

        <TabPane tabId="4">
          <OnlineShop />
        </TabPane>
        <TabPane tabId="5">
          <Galery />
        </TabPane>
        <TabPane tabId="6">
          <Trivia />
        </TabPane>
        <br />
        <TabPane tabId="7">
          <RandomQuote />
        </TabPane>
        <TabPane tabId="8">
          <Tetris />
        </TabPane>
        <TabPane tabId="9">
          <Hangman />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Navs;