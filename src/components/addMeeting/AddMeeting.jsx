import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material'
import businessServices from '../../stores/businessServices';
import managementOfMeetings from '../../stores/managementOfMeetings';


import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';



const AddMeeting = ({ value, onFormClose }) => {
    const serviceForMeeting = value
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const handleClose = () => {
        onFormClose();
    };


    const handleDateTimeChange = (newDateTime) => {
        setSelectedDateTime(newDateTime);
    };
    const handleSubmit = () => {
        if (selectedDateTime) {
            const selectedTime = selectedDateTime
            //   const selectedTime = selectedDateTime.toISOString().split('T')[1].substring(0, 8); // Get the time as a string
            console.log('Selected Time:', selectedTime);
            // Perform further actions with the selected time
        }
    };


    const addNewMeeting = async () => {
        const newMeeting = {
            serviceName: serviceForMeeting.serviceName,
            serviceDescribtion: serviceForMeeting.serviceDescribtion,
            servicePrice: serviceForMeeting.servicePrice,
            clientName: clientName,
            clientPhone: clientPhone,
            clientEmail: clientEmail,
            dateTime: selectedDateTime
        };
        // getServices();
        managementOfMeetings.addMeeting(newMeeting);

        handleClose();
    }
    // const closeForm = () => {
    //     setIsFormOpen(false);
    // };

    return (
        <>
            <Dialog onClose={handleClose} open={true}>
                <DialogTitle style={{color:"#9c27b0"}}>Add a new service</DialogTitle>
                <DialogContent className="d-flex flex-column">
                    <TextField
                     style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="clientName"
                        label="client Name"
                        value={clientName}
                        onChange={(event) => setClientName(event.target.value)}
                    />
                    <TextField
                     style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="clientPhone"
                        label="client Phone "
                        value={clientPhone}
                        onChange={(event) => setClientPhone(event.target.value)}
                    />

                    <TextField
                     style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="clientEmail"
                        label="client Email"
                        value={clientEmail}
                        onChange={(event) => setClientEmail(event.target.value)}
                    />
                  
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="With Time Clock"
                                value={selectedDateTime}
                                onChange={handleDateTimeChange}
                                viewRenderers={{
                                    hours: renderTimeViewClock,
                                    minutes: renderTimeViewClock,
                                    seconds: renderTimeViewClock,
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button  style={{color:"#9c27b0"}}onClick={handleClose}>Cancel</Button>
                    <Button style={{color:"#9c27b0"}} onClick={addNewMeeting}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddMeeting
