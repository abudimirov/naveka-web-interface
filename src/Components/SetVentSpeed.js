import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';


const SetVentSpeed = () => {


    const [ value, setValue ] = React.useState(1);

    return (
                <div>
                <RangeSlider
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    min={1}
                    max={3}
                />

                </div>
    );

};

export default SetVentSpeed;