import React, { Component } from "react";
import * as ReactDOM from "react-dom";

/* global $ */
/* global Morris */

class StackedChart extends Component {


        state = {
            earnings: null,
            stackedData: [],
        };

    componentDidMount() {

        fetch('http://localhost:3001/api/get-yearly-earnings', {
            headers: {
                'Authorization':  sessionStorage.getItem('auth'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(result => {
                if (result.status === 401) {
                    throw new Error('Unauthorized')
                }
                return result.json()
            })
            .then(items => {
                this.setState({
                    earnings: items,
                   stackedData: items.map(item => {
                       return {
                           year: item.year,
                           download: item.download,
                           instore: item.instore
                       }
                   })
                });
                this.createStackedChart(
                    $(ReactDOM.findDOMNode(this)), 
                    this.state.stackedData, 
                    'year', 
                    ['download', 'instore'], 
                    ['Download', 'In-store'], 
                    ['#28bbe3','#f0f1f4']
                    )
             });

    }

    createStackedChart  = (element, data, xkey, ykeys, labels, lineColors) => {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eee',
            barColors: lineColors
        });
    }
    
    render() {
       return <div className="dashboard-charts morris-charts"></div>       
    }
}

export default StackedChart;