import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const [stat, setuserid] = useState(false);

    const Authdata = async () => {
        try {
            const res = await fetch('/Auth', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (res.status === 200) {
                setuserid(true);
            }
        } catch (err) {
            console.log('Something went wrong');
        }
    }

    useEffect(() => {
        Authdata();
    });
    if (stat === true) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <div className="container-fluid" >
                        <NavLink className="navbar-brand"
                            to="/" > FITNESS WORLD
                        </NavLink>
                        <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon" > </span>
                        </button >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto navbar-background" >
                                <li className="nav-item" >
                                    <NavLink className="nav-link active" aria-current="page" to="/" > Home </NavLink>
                                </li >
                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        Brain </p>
                                    <ul className="dropdown-menu"
                                        aria-labelledby="navbarDropdown" >
                                        <li> < NavLink className="dropdown-item"
                                            to="/snake" > Snake </NavLink></li >
                                    </ul>
                                </li >
                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false" style={{ color: 'black' }} >
                                        Body </p> <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdown" >
                                        <li> <NavLink className="dropdown-item"
                                            to="/yoga" > Yoga </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/excercise" > Excercise </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/food" > Food </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/nutrients" > Nutrients </NavLink></li >
                                    </ul>
                                </li >

                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        Info </p> <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdown" >
                                        <li> < NavLink className="dropdown-item"
                                            to="/bmi" > BMI </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/fitness" > Fitness </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/flexibility" > Flexibility </NavLink></li >
                                    </ul> </li >
                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        Contactss </p> <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdown" >
                                        <li >
                                    <NavLink className="dropdown-item"
                                         to="/livechat" > LiveChat </NavLink> </li >       
                                        <li > < a className="dropdown-item"
                                            href="https://gmail.com"
                                            target="_blank" rel="noreferrer"> Gmail </a></li >
                                        <li > < a className="dropdown-item"
                                            href="https://facebook.com"
                                            target="_blank" rel="noreferrer"> Facebook </a></li >
                                    </ul> </li >
                                <li className="nav-item" >
                                    <NavLink className="nav-link active"
                                        aria-current="page" to="/feedback" > Feedback </NavLink> </li >
                                <li className="nav-item" >
                                    <NavLink className="nav-link active"
                                        aria-current="page" to="/logout" > Logout </NavLink> </li > </ul> </div > </div> </nav > </>
        )
    } else {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <div className="container-fluid" >
                        <NavLink className="navbar-brand"
                            to="/" > FITNESS WORLD
                        </NavLink>
                        <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon" > </span>
                        </button >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto navbar-background" >
                                <li className="nav-item" >
                                    <NavLink className="nav-link active" aria-current="page" to="/" > Home </NavLink>
                                </li >
                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        Brain </p>
                                    <ul className="dropdown-menu"
                                        aria-labelledby="navbarDropdown" >
                                        <li> < NavLink className="dropdown-item"
                                            to="/snake" > Snake </NavLink></li >
                                    </ul>
                                </li >
                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false" style={{ color: 'black' }} >
                                        Body </p> <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdown" >
                                        <li> <NavLink className="dropdown-item"
                                            to="/yoga" > Yoga </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/excercise" > Excercise </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/food" > Food </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/nutrients" > Nutrients </NavLink></li >
                                    </ul>
                                </li >

                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        Info </p> <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdown" >
                                        <li> < NavLink className="dropdown-item"
                                            to="/bmi" > BMI </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/fitness" > Fitness </NavLink></li >
                                        <li > < NavLink className="dropdown-item"
                                            to="/flexibility" > Flexibility </NavLink></li >
                                    </ul> </li >
                                <li className="nav-item dropdown" >
                                    <p className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                        Contact </p> <ul className="dropdown-menu"
                                            aria-labelledby="navbarDropdown" >
                                        <li > < a className="dropdown-item"
                                            href="https://gmail.com"
                                            target="_blank" rel="noreferrer"> Gmail </a></li >
                                        <li > < a className="dropdown-item"
                                            href="https://facebook.com"
                                            target="_blank" rel="noreferrer"> Facebook </a></li >
                                    </ul> </li >
                                <li className="nav-item" >
                                    <NavLink className="nav-link active"
                                        aria-current="page" to="/login" > Login </NavLink> </li >
                                <li className="nav-item" >
                                    <NavLink className="nav-link active"
                                        aria-current="page" to="/signup" > Signup </NavLink> </li > </ul> </div > </div> </nav > </>
        )
    }
};

export default Navbar;
