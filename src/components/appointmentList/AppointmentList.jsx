import { useEffect } from 'react'
import SingleAppointment from '../singleAppointment/SingleAppointment'
import { observable, makeObservable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import MeetingStore from '../../stores/managementOfMeetings.js'

const AppoinmentList = observer(() => {
    useEffect(() => {
        MeetingStore.initialMeeting();
    }, [])
    return (
        <>
            <div>
                {MeetingStore.meetingsList != null ?
                    MeetingStore.meetingsList.map((value, key) => <SingleAppointment key={key} value={value}></SingleAppointment>) : 'אין פגישות'}
            </div>
            
        </>
    )
})

export default AppoinmentList
// import { useState } from 'react'
// // import { observer } from 'mobx-react';
// import BusinessServices from '../../stores/businessServices'
// import NewServiceForm from '../newServiceForm/NewServiceForm';
// import businessServices from '../../stores/businessServices';
// // import { useEffect } from 'react'
// import { Button } from '@mui/material' 
// import DisplaySingleService from '../displaySingleService/DisplaySingleService'

// const AppoinmentList = observer(({isAdmin}) => {
   
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     useEffect(() => {
//         getServices();
//     }, [])
//     const getServices = () => {
//         businessServices.getServices();
//     }
//     const openNewServiceForm = () => {
//         setIsFormOpen(true);
//     }

//     const closeForm = () => {
//         setIsFormOpen(false);
//     };

//     const handleAddNew =()=>{
//         setIsFormOpen(true);
//     }
//     return (
//         <div className="container">
//           {businessServices.businessServicesList != null ?
//                    businessServices.businessServicesList.map((value, key) => <DisplaySingleService key={key} value={value} isAdmin={isAdmin} ></DisplaySingleService>) : "no services"}
//             <div>
//                 {isAdmin === true && (
//                   <Button onClick={handleAddNew} variant="contained" color="primary" >
//                         Add a new service
//                     </Button>
//                 )}
//                 {
//                     isAdmin===false&&(
//                     <div>not admin</div>
//                     )

//                 }
//             </div>
//             {/* <div> קשור בכלל לניתוב השני של אדמין
//                 {MeetingStore.meetingsList != null ?
//                     MeetingStore.meetingsList.map((value, key) => <SingleAppointment key={key} value={value}></SingleAppointment>) : 'אין פגישות'}
//             </div> */}
//             {/* <div> {isFormOpen && (<NewServiceForm onFormClose={closeForm}  ={getServices} />)}</div> */}
//             {isFormOpen && (
//         <NewServiceForm onFormClose={closeForm} getServices={getServices} />
//       )}

//         </div>
//     )
// })

// export default AppoinmentList