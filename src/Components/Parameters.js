import React, { Component } from 'react';
import SetVentSpeed from "./SetVentSpeed";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import VentInfo from "./VentInfo";
import Jumbotron from "react-bootstrap/Jumbotron";
import SetTemp from "./SetTemp";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import VentMode from "./VentMode";


class Parameters extends Component {
    constructor(props) {
        super(props);
        this.handleEnableAuto = this.handleEnableAuto.bind(this);
        this.handleDisableAuto = this.handleDisableAuto.bind(this);
        this.setFirstSpeed = this.setFirstSpeed.bind(this);
        this.setSecondSpeed = this.setSecondSpeed.bind(this);
        this.setThirdSpeed = this.setThirdSpeed.bind(this);
        this.setModeVent = this.setModeVent.bind(this);
        this.setModeHeat = this.setModeHeat.bind(this);
        this.setModeCool = this.setModeCool.bind(this);
        this.state = {autoVent: false, ventSpeed: 0, ventMode: 0};
    }


    handleEnableAuto() {
        this.setState({autoVent: true});
    }

    handleDisableAuto() {
        this.setState({autoVent: false});
    }

    setFirstSpeed() {
        this.setState({ventSpeed: 1});
    }

    setSecondSpeed() {
        this.setState({ventSpeed: 2});
    }

    setThirdSpeed() {
        this.setState({ventSpeed: 3});
    }

    setModeVent() {
        this.setState({ventMode: 0});
    }

    setModeHeat() {
        this.setState({ventMode: 1});
    }

    setModeCool() {
        this.setState({ventMode: 2});
    }


    render() {
        const autoVent = this.state.autoVent;
        const ventSpeed = this.state.ventSpeed;
        const ventMode = this.state.ventMode;
        const isOn = this.state.isOn;

        let set_auto_vent;

        if (autoVent) {
            set_auto_vent = <div>При режиме "авто" ручной выбор скоростей невозможен.<Button size="lg" variant="secondary" onClick={this.handleDisableAuto} block>Включить ручной</Button></div>;
        } else {
            set_auto_vent = <Button size="lg" variant="success" onClick={this.handleEnableAuto} block>Включить авто</Button>;
        }



        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            Скорость вентилятора
                            <ButtonGroup aria-label="Basic example">
                                <Button disabled={autoVent} onClick={this.setFirstSpeed} id="firstSpeed">1</Button>
                                <Button disabled={autoVent} onClick={this.setSecondSpeed} id="secondSpeed">2</Button>
                                <Button disabled={autoVent} onClick={this.setThirdSpeed} id="thirdSpeed">3</Button>
                            </ButtonGroup>
                            {set_auto_vent}
                            Температура уставки (от 15 до 30)
                            <SetTemp />
                            Режим работы:
                            <Row>
                                <Col xs={4}>
                                    <a onClick={this.setModeVent}>
                                        <VentMode  mode_class="card_vent" mode_name="Вентиляция"/>
                                    </a>
                                </Col>
                                <Col xs={4}>
                                    <a onClick={this.setModeHeat}>
                                        <VentMode  mode_class="card_heat" mode_name="Нагрев"/>
                                    </a>
                                </Col>
                                <Col xs={4}>
                                    <a onClick={this.setModeCool}>
                                        <VentMode  mode_class="card_cool" mode_name="Охлаждение"/>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={4}>
                            <VentInfo temperature="20" ventspeed={ventSpeed} auto={autoVent} ventmode={ventMode}/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Parameters;