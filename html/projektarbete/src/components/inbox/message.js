import React from 'react';

export default ({data, index}) => {
    return (
        <div key={index} className='card-body d-flex border-bottom pt-1 pb-1 pl-0 pr-0'>
            <img src={'/assets/images/users/user-1.jpg'} alt='User' className='rounded-circle thumb-md' />
            <div className='pl-2 w-100'>
                <div className='d-flex justify-content-between'>
                    <h6>{data.sentFrom}</h6>
                    <p className='mt-2 mb-0'>{new Date(data.created).toTimeString().substring(0, 5)}</p>

                </div>
                <p className='mb-0 text-left'>{data.content.length > 25 ? data.content.substring(0, 25)+"..." : data.content}</p>
            </div>
        </div>
    )
}