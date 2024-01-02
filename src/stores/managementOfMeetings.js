import { observable, makeObservable, action, computed } from 'mobx';

const meeting = {
    serviceName: "",
    serviceDescribtion: '',
    servicePrice: "",
    dateTime: '',
    clientName: "",
    clientPhone: "",
    clientEmail: ""
}

class MeetingStore {
    meetingList = [];
    constructor() {
        makeObservable(this, {
            meetingList: observable,
            addMeeting: action,
            initialMeeting: action
        })
    }

    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.status)
        if (response.status === 200) {
            this.businessServicesList = ([...this.meetingList, meeting])
            console.log(this.businessServicesList.length)
        }
        else if(response.send==="Appointment is not available!"){
            console.log("error")
        }
    }
  
    getMeetings = async () => {

        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();

        if (response.status === 200) {
            this.businessServicesList = ([...data]);

            this.businessServicesList = this.businessServicesList.filter(x => x.serviceId != service.serviceId)
            this.businessServicesList = ([...this.businessServicesList, service])
            console.log(this.businessServicesList.length)

        }
    }
    initialMeeting = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
        this.meetingsList = ([...data]);
    }
}
export default new MeetingStore();