import { useEffect, useState } from 'react'
import ServicesBussinessList from '../servicesBussinessList/ServicesBussinessList'
import ShowingBusinessDetails from '../showingBusinessDetails/ShowingBusinessDetails'
import { observer } from 'mobx-react';
import BusinessServices from '../../stores/businessServices.js'
const User = observer(() => {
  useEffect(() => {
    BusinessServices.initialBusinessData();
    BusinessServices.getServices();

  }, []);
  const [count, setCount] = useState(0)
  localStorage.removeItem("isLogin");
  return (
    <>
      <ShowingBusinessDetails></ShowingBusinessDetails>
      <ServicesBussinessList isAdmin={false}></ServicesBussinessList>

    </>
  )
})

export default User
