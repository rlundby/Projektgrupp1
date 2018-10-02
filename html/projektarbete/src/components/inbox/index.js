import React from 'react';
import Message from './message';

export default class Inbox extends React.Component {
    state = {
        messages: null,
        token: sessionStorage.getItem('auth')
    };


    componentDidMount() {
        // skickar med token i headers för att få tillgång till messages
        fetch('http://localhost:3001/api/messages', {
                headers: {
                    'Authorization': this.state.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            },
        )
            .then(result => {
                if (result.status === 401) {
                    throw new Error('Unauthorized')
                }
                return result.json()
            })
            .then(messages => {

                this.setState({messages})

            })

            .catch(err => console.log('error from inbox: ', err))
    }

    render() {
        if (this.state.messages === null) {
            return (
                <div className='col-xl-4 col-lg-6'>
                    <div className='card m-b-20 p-3'>
                        <h6 className='text-left m-3'>Inbox</h6>

                        <h4>Loading...</h4>

                    </div>
                </div>
            )
        } else {
            return (
                <div className='col-xl-4 col-lg-6'>
                    <div className='card m-b-20 p-3'>
                        <h6 className='text-left m-3'>Inbox</h6>

                        {this.state.messages.map((message, i) => {

                            return <Message data={message} index={i} key={i}/>

                        })}
                    </div>
                </div>)
        }

    }
}

