import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import React from 'react';
import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import BusinessServices from '../../stores/businessServices.js';

import 'bootstrap/dist/css/bootstrap.css';
import EditDetails from '../editDetails/EditDetails';
const ShowingBusinessDetails = observer((isAdmin) => {
    useEffect(() => {
        BusinessServices.initialBusinessData();
        console.log("אני פה ", BusinessServices.business)
    }, []);
    
    return (
        <div style={{ width: "1500px", paddingBottom: "2%", marginBottom: "5%", boxShadow: "5px 5px 5px #9c27b0" }}>

            <div className="d-flex justify-content-between " style={{ width: "1500px" }}>

                <div className="d-flex  flex-row   " style={{ width: "1500px", }}>
                    <div className="col-4" style={{ color: "#9c27b0" }}>
                        <h1 className="business-name ">{BusinessServices.business.name}</h1>
                    </div>

                    <div className="col-4 d-flex " style={{ flexDirection: "column" }}>
                        <div className="business-owner">{BusinessServices.business.owner}</div>
                        <p className="business-description">{BusinessServices.business.description}</p>
                        <h2 className="business-address">{BusinessServices.business.address}</h2>
                        <h3 className="business-phone">{BusinessServices.business.phone}</h3>
                        <div className="business-phone">{BusinessServices.business.email}</div>
                    </div>    <div className="col-4 " >
                        {BusinessServices.isLogin ? <EditDetails></EditDetails> : <></>}
                    </div>
                </div>


            </div>


        </div>
    );
});

export default ShowingBusinessDetails;