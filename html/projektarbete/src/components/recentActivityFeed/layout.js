import React from 'react';

export default ({ userActivity, index }) => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    return (
        <ol className={"activity-feed "} key={index}>
            <li className={"feed-item p-0"}>
                <div className={"feed-item-list"} >
                    <span className={"date"}>{monthNames[new Date(userActivity.created).getMonth()]+ ' - ' + new Date(userActivity.created).getFullYear()}</span>
                    <span className={"activity-text"}>{userActivity.activity} </span>
                </div>
            </li>
        </ol>
    )
}



