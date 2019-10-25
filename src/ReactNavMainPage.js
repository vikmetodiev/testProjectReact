import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TesterFile from "./componentsInformationTab/InformationTabFile.js";
import TodoApp from "./componentsForTodoList/todoApp.js";
import MemeGenerator from "./MemeGenerator.js"
import OnlineShop from "./componentsForOnlineShop/OnlineShop.js"
const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          style={{cursor:"pointer",backgroundColor:"black",color:"azure"}}>
            Informational Tab
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{cursor:"pointer",backgroundColor:"black",color:"azure"}}>
            Todo List Tab
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
            style={{cursor:"pointer",backgroundColor:"black",color:"azure"}}>
            Meme Generator
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
            style={{cursor:"pointer",backgroundColor:"black",color:"azure"}}>
            Online Shop
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TesterFile />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <TodoApp />
        </TabPane>
        <TabPane tabId="3">
          <MemeGenerator />
        </TabPane>
        <TabPane tabId="4">
          <OnlineShop />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;