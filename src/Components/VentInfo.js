import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


class VentInfo extends Component {
    render() {
        const isAutoSpeed = this.props.auto;
        const ventSpeed = this.props.ventspeed;
        const ventMode = this.props.ventmode;
        let vent_state;
        let speed_state;
        let vent_mode;

        if (isAutoSpeed) {
            speed_state = "авто";
        } else {
            speed_state = ventSpeed;
        }

        switch (ventMode) {
            case 0:
                vent_mode = "вентиляция";
                break;
            case 1:
                vent_mode = "нагрев";
                break;
            case 2:
                vent_mode = "охлаждение";
                break;
            default:
                vent_mode = "вентиляция";
        }
        return (
            <Card border="dark">
                <Card.Header>Информация</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Alert variant="success">Установка включена</Alert>
                        t° в канале: {this.props.temperature} °C <br />
                        t° уставки: °C <br />
                        скорость вентилятора: {speed_state} <br />
                        режим работы: {vent_mode}<br />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default VentInfo;