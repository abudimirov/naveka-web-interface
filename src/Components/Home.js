import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOffClick = this.handleOffClick.bind(this);
        this.state = {isOn: false};
    }

    handleOnClick() {
        this.setState({isOn: true});
    }

    handleOffClick() {
        this.setState({isOn: false});
    }

    render() {
        const isOn = this.state.isOn;
        let set_state_button;
        if (isOn) {
            set_state_button = <Button variant="danger" size="lg" onClick={this.handleOffClick} block>Выключить установку</Button>;
        } else {
            set_state_button = <Button variant="success" size="lg" onClick={this.handleOnClick} block>Включить установку</Button>;
        }
        return (
            <div>
                <h1 className="mt-3 mb-3">Главная</h1>
                <Jumbotron>
                    <h2>
                        <Container>
                            <Row>
                                <Col>1 of 2</Col>
                                <Col>2 of 2</Col>
                            </Row>
                        </Container>
                    </h2>
                </Jumbotron>
                {set_state_button}

            </div>
        );
    }
}

export default Home;