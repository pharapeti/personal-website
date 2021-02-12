import React from 'react';
import ReactDOM from 'react-dom';
import * as Icon from 'react-bootstrap-icons';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Sidepanel from './Components/Sidepanel/Sidepanel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ReactDOM.render(
  <React.StrictMode>
    <div className="Container">
      <div className="HomepageIcons" style={{display: 'flex'}}>
        <a className="ProfileLink" target="_blank" rel="noreferrer" href="https://github.com/pharapeti"><Icon.Github/></a>
        <a className="ProfileLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrice-harapeti-653288152/"><Icon.Linkedin/></a>
        <a className="ProfileLink" target="_blank" rel="noreferrer" href="mailto:patrice.harapeti@gmail.com"><Icon.Mailbox/></a>
      </div>
      <Row>
        <Col sm={5}><Image className="ProfilePhoto" alt="Profile" src="profile.jpg" fluid/></Col>
        <Col sm={6}><Sidepanel/></Col>
      </Row>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
