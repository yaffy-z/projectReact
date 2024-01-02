import { useState } from 'react'
import MeetingStore from '../../stores/managementOfMeetings.js'
import '../../App'
import { observer } from 'mobx-react';
const SingleAppointment = observer(({ value }) => {
    const color = (dateTime) => {
        const today = new Date();
        const meetingDate = new Date(dateTime);

        const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (diffDays < 0)
            return 'no'
        else
            if (diffDays === 1) {
                return 'today'; // היום
            } else if (diffDays <= 7) {
                return 'week'; //השבוע
            }
            else if (diffDays >= 7) {
                return 'after'; // עתיד

            }

    };
    return (
        <div className={`${color(value.dateTime)}`}>

            <div className='single'>
                <div className='card' style={{
                    boxShadow: "2px 2px 2px 2px #9c27b0", borderWidth: "4px", width: "500px", height: "300px"
                }} >
                    <h2 className='name' style={{ color: "#9c27b0", fontSize: "40px" }}>
                        {value.serviceName}</h2>
                    <div className={`${color(value.dateTime)}`} style={{ fontSize: "30px" }}>name:     {value.clientName}</div>
                    <div className={`${color(value.dateTime)}`}>phone: {value.clientPhone}</div>
                    <div className={`${color(value.dateTime)}`}>e-mail: {value.clientEmail}</div>
                    <div className={`${color(value.dateTime)}`}>time:     {value.dateTime}</div>
                </div>
            </div>
        </div>

    )
})

export default SingleAppointment
