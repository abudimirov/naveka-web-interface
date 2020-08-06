import React, { Component } from 'react';
import Card from "react-bootstrap/Card";



class VentMode extends Component {
    render() {
        return (
            <Card className={this.props.mode_class}>
                <Card.Body>
                    <Card.Title>{this.props.mode_name}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default VentMode;