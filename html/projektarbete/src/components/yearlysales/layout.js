import React from 'react';
import {Sparklines, SparklinesBars} from "react-sparklines";


export default ({ yearly, index }) => {
    return (
            
            <div className="col-md-8 text-right" id="sparkline" key={index}>

                <Sparklines data={yearly.monthlySales}>
                    <SparklinesBars style={{ fill: "#40c0f5" }} />
                </Sparklines>

            
            </div>
    )
}


