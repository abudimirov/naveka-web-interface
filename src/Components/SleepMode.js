import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";


class SleepMode extends Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            <h3>Спящий режим</h3>
                        </Col>
                        <Col xs={12} lg={4}>

                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default SleepMode;