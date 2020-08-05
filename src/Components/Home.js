import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Parameters from "./Parameters";
import SleepMode from "./SleepMode";

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
                {isOn ? <Parameters /> : <SleepMode /> }
                {set_state_button}
            </div>
        );
    }
}

export default Home;