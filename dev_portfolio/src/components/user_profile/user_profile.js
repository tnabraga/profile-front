import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png'

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" alt="" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Tania Braga</h5>
        <p className=" grey darken-2 white-text">Análista de Suporte</p>
      </Row>
  </Card>
);

export default UserProfile;