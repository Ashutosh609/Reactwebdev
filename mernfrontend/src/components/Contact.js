import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {

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
        <a href='https://ashutosh369.pythonanywhere.com/' target='_' rel="noreferrer"/>
        
        </>
    )
};

export default Contact;
