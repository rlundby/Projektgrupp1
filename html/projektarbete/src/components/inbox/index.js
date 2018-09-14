import React from 'react';

export default class Inbox extends React.Component {

    state = {
        messages: null
    };

// todo: begränsa antal tecken i message.content som visas

    componentDidMount() {
        fetch('http://localhost:3001/api/messages')
            .then(result => result.json())
            .then(messages => {
                console.log('data: ', messages)
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

                        return (
                            <div key={i} className='card-body d-flex border-bottom pt-1 pb-1 pl-0 pr-0'>
                                <img src={'/assets/images/users/user-1.jpg'} alt='User' className='rounded-circle thumb-md' />
                                <div className='pl-2 w-100'>
                                    <div className='d-flex justify-content-between'>
                                        <h6>{message.sentFrom}</h6>
                                        <p className='mt-2 mb-0'>{new Date(message.created).toISOString().split('T')[0]}</p>

                                    </div>
                                    <p className='mb-0'>{message.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>)
        }

    }
}

