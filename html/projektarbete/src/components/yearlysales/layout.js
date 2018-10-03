import React from 'react';
import {Sparklines, SparklinesBars} from "react-sparklines";


export default ({ yearly, index }) => {
    return (

        <div key={index}>
            <h4>{yearly.totalSales}</h4>
            <p className="text-muted">The languages only differ grammar</p>
            <a href="#" className="text-primary">Learn more <i className="mdi mdi-chevron-double-right"></i></a>
            <div className="col-md-8 text-right">

                <Sparklines data={[0,7,8]}>
                    <SparklinesBars style={{ fill: "#40c0f5" }} />
                </Sparklines>

                {/* {    <Sparklines data={[5, 3, 2, 10, 12, 14, 12, 12, 20, 10, 2, 5, 12]}>
                            <SparklinesBars style={{ fill: "#40c0f5" }} />
                        </Sparklines>} */}
            </div>
        </div>


    )
}


