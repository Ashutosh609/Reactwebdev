import React, { useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    const Signout= async ()=>{
        try{
            const res = await fetch('/signout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            if(res.status === 200){
                history.push("/login");
            }else{
                history.push("/login");
            }
        }catch(err){
            history.push("/login");
        }

    }

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
        <form method="GET" className="verified">
            <h3>Do you want to logout?</h3>
            <button onClick={Signout}
                style={{margin: "auto auto", backgroundColor: "yellow", boxShadow: "0px 0px 10px 10px green"}}>OK</button>
        </form>
        </>

    )
};

export default Logout;