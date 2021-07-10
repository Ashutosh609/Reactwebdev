import React, { useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();
    
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
                history.push("/logout");
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
        <form action='/signout' method="GET" className="verified">
            <h3>Do you want to logout?</h3>
            <button
                style={{margin: "auto auto", backgroundColor: "yellow", boxShadow: "0px 0px 10px 10px green"}}>OK</button>
        </form>
        </>

    )
};

export default Logout;