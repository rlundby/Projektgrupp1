import React, { Component } from "react";
import * as ReactDOM from "react-dom";


/* global $ */
/* global Morris */

class DonutGraph extends Component {

    state = {
        solditems: null,
        donutdata: [
            {label: "Loading Graph", value: 0}
        ]

    };

    componentDidMount() {

        fetch('http://localhost:3001/api/sold-items')
            .then(response => response.json())
            .then(items => {
                let thisMonth = items.find(x => x.month === 8);
                this.setState({
                    solditems:  thisMonth
                });
                this.setState({
                    donutdata : [
                        {label: "Download Sales", value: this.state.solditems.download},
                        {label: "In-Store Sales", value: this.state.solditems.instore},
                        {label: "Marketplace Sales", value: this.state.solditems.marketplace}
                    ]
                });
                Morris.Donut({
                    element: $(ReactDOM.findDOMNode(this)),
                    data: this.state.donutdata,
                    resize: true,
                    colors: ['#a0f497', '#7a6fbe', '#28bbe3']
                });
            });

    }

    render() {
        return <div className="dashboard-charts morris-charts"></div>
    }
}

export default DonutGraph;