import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SetVentSpeed = () => {


    const [ value, setValue ] = React.useState(1);

    return (

                <RangeSlider
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    min={1}
                    max={3}
                />

    );

};

export default SetVentSpeed;