import React from 'react';
import Message from './message';

export default class Inbox extends React.Component {
    state = {
        messages: null
    };

// todo: tester



    componentDidMount() {
        fetch('http://localhost:3001/api/messages')
            .then(result => result.json())
            .then(messages => {
                this.setState({messages})
            })
            .catch(err => console.log('error from inbox: ', err))
    }

    render() {
        if (!this.state.messages) {
            return (
                <div>No messages found</div>
            )
        } else {
            return (
                <div className='card p-3'>
                    <h6 className='text-left m-3'>Inbox</h6>
                    {this.state.messages.map((message, i) => {

                        return <Message data={message} index={i}/>

                    })}
                </div>)
        }

    }
}

