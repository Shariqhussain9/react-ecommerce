import { useDispatch, useSelector } from "react-redux"
import { selectLoggedInUser, signOutAsync } from "../authSlice"
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function LogOut() {
const user = useSelector(selectLoggedInUser);
const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(signOutAsync())
    })
  return (
    <div>
        {!user && <Navigate to='/' replace={true}/>}
    </div>
  )
}
