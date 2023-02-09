import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const [user, setUser] = useState({ email: "", password: "", confirmpassword: "" });
    const navigate = useNavigate();

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        if (user.password === user.confirmpassword) {
            fetch("http://localhost:5000/api/v1/u/forgetPassword", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                    newPassword: user.password
                })
            }).then(res => res.json().then(data => {
                console.log(data)
                if (data.success) {
                    alert("password updated")
                    navigate("/")
                } else {
                    alert("password not updated")
                }
            }))



        } else {
            alert("password not match")
        }
    }

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="bg-neon-800 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">
                        Forgot Password
                    </h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Email</label>
                        <input onChange={handleOnChange}
                            name="email"
                            type="text"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        ></input>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <input onChange={handleOnChange}
                            name="password"
                            type="password"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        ></input>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Confirm Password</label>
                        <input onChange={handleOnChange}
                            name="confirmpassword"
                            type="password"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        ></input>
                    </div>
                    <button onClick={(e)=>handleUpdatePassword(e)} className="w-100 my-1 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
                        Update
                    </button>
                    <button className="w-48 py-2 m-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </button>
                    <button className="w-48 py-2  bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
                        <NavLink to="/admin-signup">Admin signup</NavLink>
                    </button>
                </form>
            </div>
        </>
    )
}

export default ForgetPassword