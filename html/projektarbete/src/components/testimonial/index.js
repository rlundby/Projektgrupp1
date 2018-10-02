import React from 'react';

export default class Testimonial extends React.Component {
    state = {
        testimonial: "",
        token: sessionStorage.getItem('auth'),
        isLoaded: false
    };

    componentDidMount() {
            fetch('http://localhost:3001/api/testimonials', {
                headers: {
                    'Authorization': this.state.token,
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
                .then(testimonial => {
                    this.setState({testimonial, isLoaded: true})

                })
                .catch(err => console.log('error from testimonial: ', err))
    }

    render() {
        return (
            <div className='col-xl-4'>
                {
                    this.state.isLoaded
                    ?
                    (
                    <div className='card widget-user m-b-20'>
                        <div className='widget-user-desc p-4 text-center bg-primary position-relative'>
                            <i className="fas fa-quote-left h3 text-white-50"></i>
                            <p className='text-white mb-0'>{this.state.testimonial.quote}</p>
                        </div>
                        <div className='p-4'>
                            <div className="float-left mt-2 mr-3">
                                <img src="assets/images/users/user-2.jpg" alt="user"
                                     className="rounded-circle thumb-md"/>
                            </div>
                            <h6 className="mb-1">{this.state.testimonial.name}</h6>
                            <p className="text-muted mb-0">{this.state.testimonial.jobTitle}</p>
                        </div>
                    </div>
                    )
                    :
                    <h4>Loading...</h4>

                }
            </div>
        )
    }

}