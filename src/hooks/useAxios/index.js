import axios from "axios"
import { useEffect, useState } from "react";

export const useAxiosGet = (url,)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const request = () =>{
        setLoading(true)
        return axios(`${import.meta.env.VITE_BASE_URL}/${url}`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
        request().then((data)=>setData(data))
    },[])
    return {data,loading}
}