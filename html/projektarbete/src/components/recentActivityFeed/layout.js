import React from 'react';

export default ({ userActivity, index }) => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <ol className={"activity-feed "} key={index}>
            <li className={"feed-item"}>
                <div className={"feed-item-list"} >
                    <span className={"date"}>{userActivity.created}</span>
                    <span className={"activity-text"}>{userActivity.action}</span>
                </div>
            </li>
        </ol>
    )
}



