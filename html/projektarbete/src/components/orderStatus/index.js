import React from 'react';

export default ({status}) => {
    let statusClass = 'badge badge-pill ';

    if (status === 'delivered') {
        statusClass += 'badge-success'
    } else if (status === 'shipped') {
        statusClass += 'badge-warning'
    } else {
        statusClass += 'badge-danger'
    }

    return <span className={statusClass}>{status}</span>

    // if (status === 'delivered') {
    //     return <span className="badge badge-pill badge-success">{status}</span>
    // } else if (status === 'shipped') {
    //     return <span className="badge badge-pill badge-warning">{status}</span>
    // } else {
    //     return <span className="badge badge-pill badge-danger">{status}</span>
    // }
}