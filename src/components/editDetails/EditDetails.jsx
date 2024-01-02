import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import BusinessServices from '../../stores/businessServices.js'
import Swal from 'sweetalert2'
import { useEffect } from "react";


const EditDetails = observer(() => {
    useEffect(() => {
        BusinessServices.initialBusinessData();
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: BusinessServices.business.name,
        address: BusinessServices.business.address,
        phone: BusinessServices.business.phone,
        email: BusinessServices.business.email,
        owner: BusinessServices.business.owner,
        description: BusinessServices.business.description,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.name !== '' && formData.address !== '' && formData.phone !== '' && formData.email !== '' && formData.owner !== '' && formData.description !== '') {
            BusinessServices.setBusinessData(formData);

        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required fields",
                imageUrl: X,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });

        }

        // Reset the form after submitting
        setFormData({
            name: BusinessServices.business.name,
            address: BusinessServices.business.address,
            phone: BusinessServices.business.phone,
            email: BusinessServices.business.email,
            owner: BusinessServices.business.owner,
            logo: BusinessServices.business.logo,
            description: BusinessServices.business.description,
        });
        setIsOpen(false);
    };



    return (
        <>

            <button variant="contained" style={{ backgroundColor: "#9c27b0" }} onClick={() => setIsOpen(true)} >edit</button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}  >
                <DialogTitle style={{ color: "#9c27b0" }}> Set Business Details</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">

                        <TextField
                            style={{ margin: "10px 0 10px 0" }}
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                        />
                        <TextField
                            style={{ margin: "10px 0 10px 0" }}
                            fullWidth
                            label="  address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="address"
                        />
                        <TextField
                            style={{ margin: "10px 0 10px 0" }}
                            fullWidth
                            label="   phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder=" phone"
                        />
                        <TextField
                            style={{ margin: "10px 0 10px 0" }}
                            fullWidth
                            label="  email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email"
                        />
                        <TextField
                            style={{ margin: "10px 0 10px 0" }}
                            fullWidth
                            label="   owner"
                            name="owner"
                            value={formData.owner}
                            onChange={handleInputChange}
                            placeholder="owner"
                        />
                        <TextField
                            style={{ margin: "10px 0 10px 0" }}
                            fullWidth
                            label="   description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="description"
                        />


                    </form>
                </DialogContent>
                <DialogActions>
                    <Button style={{ color: "#9c27b0" }} onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button style={{ color: "#9c27b0" }} type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
})

export default EditDetails