import React, {Component} from "react";
import * as ReactDOM from "react-dom";

/* global $ */
/* global Morris */

class AreaGraph extends Component {

    state = {
        entries:[{y:String, a:null, b:null, c:null}],
        data: []
     };

    componentDidMount() {

        fetch('http://localhost:3001/api/yearlyGraph')
            .then(response => response.json())
            .then(values => {
                    this.setState({ 
                        entries:values.result,
                        data: values.result.map(value => {
                            return {
                                year: value.y,
                                a: value.a,
                                b: value.b,
                                c: value.c
                            }
                        }) 
                    })
                    console.log(this.state)

                    this.createAreaChart(
                        $(ReactDOM.findDOMNode(this)),
                        this.state.data,
                        'year',
                        ['a', 'b', 'c']
                    )
                });   
        };

        createAreaChart = (element, data, xkey, ykeys)=> {
            Morris.Area({
            element: element,    
            pointSize: 0,
            lineWidth: 1,
            data: data,         
            xkey: xkey,         
            ykeys: ykeys,
            labels: ['Series A', 'Series B', 'Series C'],
            resize: true,
            gridLineColor: '#eee',
            hideHover: 'auto',
            lineColors: ['#ccc', '#7a6fbe', '#28bbe3'], 
            fillOpacity: .9,
            behaveLikeLine: true
            });
        }

    render() {
        return <div className="dashboard-charts morris-charts"></div>
    }
}

export default AreaGraph;