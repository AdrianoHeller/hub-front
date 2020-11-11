import React,{ useEffect, useState, useRef } from 'react';
import HorizontalChart from '../Graphics/HorizontalChart';

export default props => {
    const horizontalRef = useRef(null);
    const [chartState,setChartState] = useState(null);

    useEffect(() => {
        setChartState(new HorizontalChart(horizontalRef.current));
    },[]);

    return (
        <>
            <div
                className="horizontalChart"
                ref={horizontalRef}>
            </div>
        </>
    )
};