import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


class VentInfo extends Component {
    render() {
        const isAutoSpeed = this.props.auto;
        const ventSpeed = this.props.ventspeed;
        let vent_state;
        let speed_state;

        if (isAutoSpeed) {
            speed_state = "авто";
        } else {
            speed_state = ventSpeed;
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
                        режим работы: <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default VentInfo;