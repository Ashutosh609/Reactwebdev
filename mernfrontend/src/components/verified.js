import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Verified = () => {

    const history = useHistory();
    const [userid,setuserid]=useState();

    const Authdata = async ()=>{
        try{
            const res = await fetch('/Auth',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            if(res.status === 200){
                const data = await res.json();
                setuserid(data.Userid);
            }else{
                history.push("/login");
            }
        }catch(err){
            history.push("/login");
        }
    }

    useEffect(()=>{
        Authdata();
    });

    return (
        <>
            <form action="/" method="GET" className="verified">
            <h3>{userid} Done successfully<br/>Click OK to continue</h3>
            <button
                style={{margin: "auto auto", backgroundColor: "yellow", boxShadow: "0px 0px 10px 10px green"}}>OK</button>
        </form>
        </>

    )
};

export default Verified;