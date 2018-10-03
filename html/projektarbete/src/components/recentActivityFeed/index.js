import React, { Component } from "react";
import Layout from './layout';
export default class Log extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activityLogs: []
        };
    }


    componentDidMount() {
        fetch('http://localhost:3001/api/recent-activity')
            .then(response => response.json())
            .then(data => { this.setState({ activityLogs: data.result }) 
            
        })
            .catch(error => console.log('error from recent activity: ', error))
    };

    onClickToReload = (e) => {
        e.preventDefault()
        console.log('data is reloaded');
        
      fetch('http://localhost:3001/api/recent-activity')
        .then(response => response.json())
        .then(data => { this.setState({ activityLogs: data.result }) })
        .catch(error => console.log('error from recent activity: ', error))

        
    }

    render() {
        if (this.state.activityLogs) {
            return (
                <div className={"col-xl-4 col-lg-6"} >
                    <div className={"card-body"}  >
                        <div className={"card"}>
                            <h4 className={" header-title"}> Recent Activity Feed </h4>
                            {
                                this.state.activityLogs.map((userActivity, i) => {
                                    return <Layout userActivity={userActivity} index={3} />
                                })
                            }
                            <div className={"text-center"}>
                                <button className={"btn btn-sm btn-primary"} onClick={this.onClickToReload}> Load more </button>
                            </div>
                        </div>
                    </div >
                </div>
            )
        } else {
            return (
                <div>server dose not respond</div>
            )
        }

    }


}
