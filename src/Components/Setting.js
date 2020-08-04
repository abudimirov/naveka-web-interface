import React, { Component } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import FormControl from "react-bootstrap/FormControl";
import Popover from "react-bootstrap/Popover";




class Setting extends Component {
    render() {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">{this.props.short_description}</Popover.Title>
                <Popover.Content>
                    {this.props.full_description}
                </Popover.Content>
            </Popover>
        );
        return (
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            {this.props.name}
                            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                <span className="tooltip-block">
                                    <span className="tooltip-link">?</span>
                                </span>
                            </OverlayTrigger>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder={this.props.short_description}
                        aria-label={this.props.short_description}
                        aria-describedby={this.props.full_description}
                    />
                </InputGroup>
        );

    }
}

export default Setting;