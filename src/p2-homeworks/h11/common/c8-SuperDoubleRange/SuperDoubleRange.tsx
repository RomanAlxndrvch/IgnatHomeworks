import React from 'react'
import {Box, Slider} from "@mui/material";
import {isArray} from "util";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
                                                                   onChangeRange, value,
                                                                   // min, max, step, disable, ...
                                                               }
) => {
    const sliderOnChangeHandler = (event: Event, value: number | number[]) => {
        const values = value as number[]
        if (onChangeRange) onChangeRange([values[0], values[1]])
    }

    return (
        <Box sx={{width: 200}}>
            DoubleRange
            <Slider value={value} onChange={sliderOnChangeHandler}/>
        </Box>
    )
}

export default SuperDoubleRange
