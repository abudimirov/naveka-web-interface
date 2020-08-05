import React, { Component } from 'react';
import SetVentSpeed from "./SetVentSpeed";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import VentInfo from "./VentInfo";
import Jumbotron from "react-bootstrap/Jumbotron";


class Parameters extends Component {
    constructor(props) {
        super(props);
        this.handleEnableAuto = this.handleEnableAuto.bind(this);
        this.handleDisableAuto = this.handleDisableAuto.bind(this);
        this.state = {autoVent: false};
    }


    handleEnableAuto() {
        this.setState({autoVent: true});
    }

    handleDisableAuto() {
        this.setState({autoVent: false});
    }

    render() {
        const autoVent = this.state.autoVent;
        const isOn = this.state.isOn;

        let set_auto_vent;

        if (autoVent) {
            set_auto_vent = <div><p>При режиме "авто" ручной выбор скоростей невозможен.</p><Button size="lg" variant="secondary" onClick={this.handleDisableAuto} block>Включить ручной</Button></div>;
        } else {
            set_auto_vent = <Button size="lg" variant="success" onClick={this.handleEnableAuto} block>Включить авто</Button>;
        }

        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            Скорость вентилятора (от 1 до 3)
                            <SetVentSpeed />
                            {set_auto_vent}
                        </Col>
                        <Col xs={12} lg={4}>
                            <VentInfo temperature="20" ventspeed="2" auto={autoVent}/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Parameters;