import { useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";
import ShowingBusinessDetails from '../showingBusinessDetails/ShowingBusinessDetails';
import Login from '../login/Login';
import BusinessServices from '../../stores/businessServices';
import { observer } from "mobx-react";
import MeetingStore from '../../stores/managementOfMeetings.js'

const Admin = observer(() => {
  useEffect(() => {
    if (localStorage.getItem("isLogin") === 'true')
      BusinessServices.setIsLogin(true)
    MeetingStore.initialMeeting();
    
  }, [])

  return (
    <>
      <ShowingBusinessDetails></ShowingBusinessDetails>
      {BusinessServices.isLogin ?
        <>
          <Link to="./services">services</Link>
          |  <Link to="./meeting">meeting</Link>
          <Outlet />
        </> : <Login />}
    </>
  )
})

export default Admin
