import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';


const SetTemp = () => {


    const [ value, setValue ] = React.useState(1);

    return (
                <div>
                <RangeSlider
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    min={15}
                    max={30}
                />

                </div>
    );

};

export default SetTemp;