import { useState, useEffect } from 'react'
import { Box, TextField, Button } from '@mui/material'
import BusinessServices from '../../stores/businessServices.js'
import Swal from 'sweetalert2'
import { observer } from 'mobx-react'

const Login = observer(() => {
    async function fetchData() {
        await BusinessServices.initialBusinessData();
        console.log("LEN", Object.keys(BusinessServices.business).length)
        if (Object.keys(BusinessServices.business).length === 0) {
            BusinessServices.setBusinessData({
                name: "expert photographer",
                phone: '0527622812',
                email: 'SuperPhotographer123@gmail.com',
                owner: " yaffy zaiger ",
                description: "make it super!!"
            });
        }
    }
    fetchData();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.statusText)

        if (response.status === 200) {
            localStorage.setItem("isLogin", true);
            BusinessServices.setIsLogin(true)
            Swal.fire({
                title: "Recognized!",
            });
        }
        else {
            Swal.fire({
                title: "no allocation",
                width: 500,
                padding: "3em",
                color: "black",
                backgroundColor: "yellow",
                backdrop: `
                rgba(0,0,185,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat.
              `});
        }
    }
    const handleLogIn = async () => {
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.statusText);
    }

    return (
        < >
            <Box className="d-flex flex-column ">
                <TextField label="name" value={name} onChange={(e) => setName(e.target.value)} style={{width:"300px"}} ></TextField>
                <TextField   style={{width:"300px", margin:"20px 0 20px 0"}} label="password" value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
                <Button style={{width:"300px", color:"#9c27b0"}} onClick={handleLogin}>login</Button>
            </Box>

        </>
    )
})



export default Login
