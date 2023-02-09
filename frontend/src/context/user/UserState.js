import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserState = (props)=>{


    const naviage = useNavigate();

    const signUp = async(user)=>{
       try{
        const res = await axios.post('/u/signUpUser',user);
        console.log(res);
        if(res.data.success)
            localStorage.setItem('token', res.data.token);
            naviage('/home')
       }catch(err){
        console.log(err)
       }
    }
    const login = async(user)=>{
       try{
        const res = await axios.post('/u/loginUser',user);
        console.log(res);
        if(res.data.success){

            localStorage.setItem('token', res.data.token);
            naviage('/home')
        }
       }catch(err){
        console.log(err)
       }
    }

    return(
        <UserContext.Provider value={{signUp, login}}>
            {
                props.children
            }
        </UserContext.Provider>
    )
}

export default UserState;