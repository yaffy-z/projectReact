import { useState } from 'react'
import { observer } from 'mobx-react';
import NewServiceForm from '../newServiceForm/NewServiceForm';
import BusinessServices from '../../stores/businessServices.js';
import { useEffect } from 'react'
import { Button } from '@mui/material'
import DisplaySingleService from '../displaySingleService/DisplaySingleService'

const ServicesBussinessList = observer(({ isAdmin }) => {
    useEffect(() => {
        BusinessServices.getServices();

    }, [])
    const [isFormOpen, setIsFormOpen] = useState(false);
    useEffect(() => {
        BusinessServices.getServices();
    }, [])
    const getServices = () => {
        BusinessServices.getServices();
    }
    const openNewServiceForm = () => {
        setIsFormOpen(true);
    }

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const handleAddNew = () => {
        setIsFormOpen(true);
    }
    return (
        <div className="d-flex flex-column mb-3 p-relative">
            <div className="align-items-stretch ">
                {
                    isAdmin === false && (
                        <div variant="h4" style={{ color: '#9c27b0' }}> our services:</div>
                    )

                }
            </div>
            <div className="d-flex justify-content-around align-items-stretch row ">
                {BusinessServices.businessServicesList.length != 0 ?
                    BusinessServices.businessServicesList.map((value, key) => <DisplaySingleService key={key} value={value} isAdmin={isAdmin} ></DisplaySingleService>) : "no services"}
                <div>
                    {isAdmin === true && (
                        <Button onClick={handleAddNew} variant="contained" color="primary" style={{ backgroundColor: "#9c27b0", margin: "10px 0 0 0" }} className="btn btn-primary fixed-bottom p-fixed" >
                            Add a new service
                        </Button>
                    )}

                </div>
                {isFormOpen && (
                    <NewServiceForm onFormClose={closeForm} getServices={getServices} />
                )}

            </div>
        </div>
    )
})

export default ServicesBussinessList
