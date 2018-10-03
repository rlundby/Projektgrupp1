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

}