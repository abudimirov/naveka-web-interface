import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


class VentInfo extends Component {
    render() {
        const isOn = this.props.ventstate;
        let vent_state;
        if (isOn) {
            vent_state = <Alert variant="success">Установка включена</Alert>;
        } else {
            vent_state = <Alert variant="danger">Установка выключена</Alert>;
        }
        return (
            <Card border="dark">
                <Card.Header>Информация</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {vent_state}
                        t° в канале: {this.props.temperature} °C <br />
                        скорость вентилятора: {this.props.ventspeed} <br />
                        режим работы: <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default VentInfo;