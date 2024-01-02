import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material'
import BusinessServices from '../../stores/businessServices.js'


const NewServiceForm = ({ onFormClose, getServices }) => {

    const [serviceId, setServiceId] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [servicePrice, setServicePrice] = useState('');

    const handleClose = () => {
        onFormClose();
    };
    const addNewService = async () => {

        const newService = {
            serviceId: serviceId,
            serviceName: serviceName,
            serviceDescription: serviceDescription,
            servicePrice: servicePrice

        };
        BusinessServices.addService(newService);
        getServices();
        onFormClose();
    }


    return (
        <>
            <Dialog onClose={handleClose} open={true}>
                <DialogTitle className="d-flex flex-column mb-3 justify-content-around" style={{ color: "#9c27b0" }}>Add a new service</DialogTitle>
                <DialogContent className="d-flex flex-column mb-3 justify-content-around" >
                    <TextField
                        style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="serviceId"
                        label="Service Id"
                        value={serviceId}
                        onChange={(event) => setServiceId(event.target.value)}
                    />
                    <TextField
                        style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="serviceName"
                        label="Service name"
                        value={serviceName}
                        onChange={(event) => setServiceName(event.target.value)}
                    />
                    <TextField
                        style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="serviceDescription"
                        label="Service description"
                        value={serviceDescription}
                        onChange={(event) => setServiceDescription(event.target.value)}
                    />
                    <TextField
                        style={{ margin: "10px 0 10px 0" }}
                        autoFocus
                        id="servicePrice"
                        label="Service price"
                        value={servicePrice}
                        onChange={(event) => setServicePrice(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: "#9c27b0" }}>Cancel</Button>
                    <Button onClick={addNewService} style={{ color: "#9c27b0" }}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default NewServiceForm
