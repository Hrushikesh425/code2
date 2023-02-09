import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/user/UserContext";

function SignPage() {

  const userContext = useContext(UserContext);
  const {signUp} = userContext;

  const [user, setUser] = useState({name:"", username:"", email:"", password:"", phone:0, div:"", branch:"", studentid:"", collegname:"" });

  const handlSignUp = (e)=>{
    e.preventDefault();
    signUp(user)
  }

  const handleOnChange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value});
    console.log(user)
  }

  return (
    <>
      <div className="bg-neon-800 flex flex-col justify-center">
        <form className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign Up
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Name</label>
            <input onChange= {handleOnChange} 
            name="name"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input onChange= {handleOnChange} 
            name="email"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input onChange= {handleOnChange} 
            name="username"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>College Name</label>
            <input onChange= {handleOnChange} 
            name="collegname"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Student Id</label>
            <input onChange= {handleOnChange} 
            name="studentid"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Branch</label>
            <input onChange= {handleOnChange} 
            name="branch"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>phone no</label>
            <input onChange= {handleOnChange} 
            name="phone"
              type="number"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>div</label>
            <input onChange= {handleOnChange} 
            name="div"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input onChange= {handleOnChange} 
            name="password"
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div>
          {/* <div className="flex flex-col text-gray-400 py-2">
            <label>Confirm Password</label>
            <input onChange= {handleOnChange} 
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            ></input>
          </div> */}
          <div className="flex justify-between text-gray-400 py-2">
            <NavLink to="/login">Already Signed</NavLink>
          </div>

          <center>
            <button onClick={handlSignUp} className="w-50 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white">
              Sign Up
            </button>
          </center>
        </form>
      </div>
    </>
  );
}

export default SignPage;
