import { LogOut } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Profile() {
    let [user, setUser] = useState({ email: "", password: "" })

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('log-user'))
        const email = userData.email;
        const password = userData.password;
        setUser({ email, password })
    }, []);

    const navigate = useNavigate()

    return (
        <div>
            <div style={{ marginTop: "50px" }}>
                <div
                    className="d-flex justify-content-center rounded-2 "
                    style={{ backgroundColor: "rgb(127 206 241 / 62%)" }}
                >
                    <div
                        style={{ backgroundColor: "#ffff" }}
                        className="p-4 pt-1 w-25 mt-5 mb-5 border rounded-2"
                    >
                        <h1 className="text-center">User Profile</h1>
                        <hr />
                        Email :{user.email}

                        <br />
                        password: {user.password}
                        <Button onClick={() => navigate("/")} className="mt-3 w-100" color="danger">
                            Logout <LogOut />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
