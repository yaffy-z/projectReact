import { useState } from 'react'
import { Button } from '@mui/material'
import AddMeeting from '../addMeeting/AddMeeting'

const DisplaySingleService = ({ value, isAdmin }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const handleAddMeeting = () => {
        setIsFormOpen(true);
    }

    return (
       
            <div className='card col-4 p-relative' style={{ height: '350px'  }}>
                <div className="card-body"> <h2 className="card-title">
                    {value.name}</h2>
                    <div className="card-text">
                        <div>service:     {value.name}</div>
                        <div>description: {value.serviceDescription}</div>
                        <div>price: {value.servicePrice}</div>
                         {isAdmin == ! true && (
                <Button onClick={handleAddMeeting} variant="contained" color="secondary" className=" p-absolute stretched-link Btn " >
                    add meeting
                </Button>
            )}
            {isFormOpen && (
                <AddMeeting value={value} onFormClose={closeForm} />
            )}

                    </div>
                </div>

            </div>
           


       
    )
}

export default DisplaySingleService