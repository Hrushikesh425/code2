import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/user/UserContext";

function LoginPage() {

  const userContext = useContext(UserContext);
  const {login} = userContext;

  const [user, setUser] = useState({email:"", password:""});

  const handlSignUp = (e)=>{
    e.preventDefault();
    login(user)
  }

  const handleOnChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }


  return (
    <>
      <div className="bg-neon-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Login
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
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <p ><NavLink to="/forgetpassword">Forgot Password ?</NavLink></p>
          </div>
          <button onClick={handlSignUp} className="w-50 my-1 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
            <NavLink to="/home">Login</NavLink>
          </button>
          <button className="w-50 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
            <NavLink to="/signup">Sign Up</NavLink>
          </button>
          <button className="w-100 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
            <NavLink to="/admin-signup">Admin signup</NavLink>
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
