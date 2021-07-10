import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();
    const [userid,setuserid]=useState();
    const [stat,setstat]=useState(false);

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
                setstat(true);
            }else{
                history.push("/");
            }
        }catch(err){
            history.push("/");
        }
    }

    
    useEffect(()=>{
        Authdata();
    });
    return (
        <>
            <marquee behavior="" direction="" id='msg' scrollamount='3'>
                <h3>Note:-This website is under development (Web Developer-Ashutosh)</h3>
            </marquee>
            <section className='section'>
                <h1 style={{ color: "red" }}>Welcome {userid} to fitness world</h1>
                <h3 style={{ color: "darkgreen" }}>
                    <p>This Website is about different types of excercise, yoga, food-items required for the development
                        and
                        improvements of different body parts.</p>
                    <p>The outcome provided here are :-</p>
                    <ul style={{ listStyle: "none", color: "darkmagenta" }}>
                        <li>BMI Calculation</li>
                        <li>Fitness defination</li>
                        <li>Flexibility measurement</li>
                        <li>Body fitness</li>
                        <li>Brain fitness</li>
                    </ul>
                    <p>{stat?'Feel free for giving your opinion in the feedback section.':
                         ''}</p>
                </h3>
            </section>
        </>

    )
};

export default Home;