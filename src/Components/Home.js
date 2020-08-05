import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SetVentSpeed from "./SetVentSpeed";
import VentInfo from "./VentInfo";

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOffClick = this.handleOffClick.bind(this);
        this.handleEnableAuto = this.handleEnableAuto.bind(this);
        this.handleDisableAuto = this.handleDisableAuto.bind(this);
        this.state = {isOn: false,autoVent: false};
    }

    handleOnClick() {
        this.setState({isOn: true});
    }

    handleOffClick() {
        this.setState({isOn: false});
    }

    handleEnableAuto() {
        this.setState({autoVent: true});
    }

    handleDisableAuto() {
        this.setState({autoVent: false});
    }

    render() {
        const isOn = this.state.isOn;
        const autoVent = this.state.autoVent;

        let set_state_button;
        if (isOn) {
            set_state_button = <Button variant="danger" size="lg" onClick={this.handleOffClick} block>Выключить установку</Button>;
        } else {
            set_state_button = <Button variant="success" size="lg" onClick={this.handleOnClick} block>Включить установку</Button>;
        }

        let set_auto_vent;
        if (autoVent) {
            set_auto_vent = <Button size="lg" onClick={this.handleDisableAuto} block>Авто</Button>;
        } else {
            set_auto_vent = <Button size="lg" onClick={this.handleEnableAuto} block>Не авто</Button>;
        }
        return (
            <div>
                <h1 className="mt-3 mb-3">Главная</h1>
                <Jumbotron>
                        <Container>
                            <Row>
                                <Col xs={12} lg={8}>
                                    Скорость вентилятора
                                    <SetVentSpeed />
                                    {set_auto_vent}
                                </Col>
                                <Col xs={12} lg={4}>
                                    <VentInfo temperature="20" ventstate={isOn} ventspeed="авто"/>
                                </Col>
                            </Row>
                        </Container>
                </Jumbotron>
                {set_state_button}

            </div>
        );
    }
}

export default Home;