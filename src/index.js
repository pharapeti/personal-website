import React from 'react';
import ReactDOM from 'react-dom';
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
      <Row>
        <Col sm={6}><Image className="ProfilePhoto" alt="Profile" src="profile.jpg" fluid/></Col>
        <Col sm={6}><Sidepanel/></Col>
      </Row>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
