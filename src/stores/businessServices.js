import { observable, makeObservable, action } from 'mobx';
import Swal from 'sweetalert2';


class BusinessServices {
  business = {
    name: "expert photographer",
    phone: '0527622812',
    email: 'SuperPhotographer123@gmail.com',
    owner: " yaffy zaiger ",
    description: "make it super!!"
  }
  businessServicesList = [];
  isLogin = false;
  setIsLogin = (val) => {
    this.isLogin = val;
  }
  constructor() {
    makeObservable(this, {
      businessServicesList: observable,
      addService: action,
      isLogin: observable,
      setIsLogin: action,
      initialBusinessData:action,
      setBusinessData:action,
      business:observable,
      getServices:action

    })
  }
  addService = async (service) => {
    const response = await fetch("http://localhost:8787/service", {
        method: "POST",
        body: JSON.stringify(service),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.status)
    if (response.status === 200) {
        this.businessServicesList = ([...this.businessServicesList, service])
        console.log(this.businessServicesList.length,"po")

    }
}
initialBusinessData = async () => {
  const response = await fetch("http://localhost:8787/businessData");
  const data = await response.json();
  this.business = data;
}
setBusinessData = async (bussinessData) => {
  const response = await fetch("http://localhost:8787/businessData", {

    method: "POST",
    body: JSON.stringify(bussinessData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (response.status === 200) {
    console.log(response.status)
    Swal.fire("!succed");
    this.business = bussinessData;
    console.log(this.business)
  } else {
    Swal.fire({
      title: "Error!",
      text: "required filds",
      imageUrl: X,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "image"
    });

  
}
}
 
 
  getServices = async () => {
    const response = await fetch("http://localhost:8787/services");
    const data = await response.json();
    const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    this.meetingsList = sortedData;
  }
}


export default new BusinessServices();