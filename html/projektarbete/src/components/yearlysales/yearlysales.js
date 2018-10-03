import React, { Component } from "react";
import Layout from './layout';
import {Sparklines, SparklinesBars} from 'react-sparklines';

export default class YearlySales extends Component {

    constructor(props) {
        super(props);

        this.state = {
            yearlySales: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/getyearlysales')
            .then(response => response.json())
            .then((data) => { 
                
                this.setState({ yearlySales: data })

              
                
        })
            .catch(error => console.log('error from recent yearlySales: ', error))

            
        };


    render() {
        if (this.state.yearlySales) {
            return(
                <div className="card m-b-10">
                <div className="card-body">
                    <h4 className="mt-0 header-title">Yearly Sales</h4>
                    <div className="row">
                        <div className="col-md-4">
                            {
                                   this.state.yearlySales.map((yearly , i) => {
                                    return <Layout yearly={yearly} key={i} />
                                })  
                            }
                        </div>

                    </div>
                </div>
            </div>
            )
        }else {
            <div>server dose not respond</div>
        }
    }
}
