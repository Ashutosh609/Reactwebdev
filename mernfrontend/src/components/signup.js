import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//clear error and set error from the validation of form

function clearerror() {
    let clerror = document.getElementsByClassName('ferror');
    for (let item of clerror) {
        item.innerHTML = '';
    }
}

function seterror(value, error) {
    document.getElementById(value).getElementsByClassName('ferror')[0].innerText = error;
}


//validate the form

function validate(name, value) {
    clearerror();
    let password = document.forms['validatesignup']['password'].value;
    let cpassword = document.forms['validatesignup']['cpassword'].value;
    if (name === 'userid' && value.length < 5) {
        seterror('userid', '*Userid is too small');
    }
    if (name === 'email' && value.length > 40) {
        seterror('email', '*Email is too long');
    }
    if (name === 'password' && password.length < 8) {
        seterror('password', '*Password is too small');

    }
    else {
        if (name === 'password' && password !== cpassword) {
            seterror('password', '*Password doesnot matched');
        }
    }
    if (name === 'cpassword' && cpassword.length < 8) {
        seterror('cpassword', '*Password is too small');

    }
    else {
        if (name === 'cpassword' && password !== cpassword) {
            seterror('cpassword', '*Password doesnot matched');
        } 
    }
}


const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        userid: '', email: '', password: '', cpassword: ''
    });

    let name, value;

    const handleinput = (e) => {
        // console.log(e.target.value);
        name = e.target.name;
        value = e.target.value;
        validate(name, value);
        setUser({ ...user, [name]: value });
    };

    const postdata = async (e) => {
        e.preventDefault();
        const { userid, email, password, cpassword } = user;

        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userid, email, password, cpassword
            })
        });

        const data = await res;
        if (data.status === 400 || !data) {
            window.alert('Invalid data')
        } else {
            window.alert('Successfully registered');
            history.push("/login");
        }

    }

    return (
        <>
            <form name="validatesignup" method="POST" className="Signup">
                <h1>SignUp</h1>
                <div style={{ margin: "auto auto" }}>
                    <div id="userid">
                        User Id: <input type="text" name="userid" required autoComplete='off' value={user.userid}
                            onChange={handleinput} />
                        <p className="ferror"></p>
                    </div>
                    <div id="email">
                        Email Id: <input type="email" name="email" required
                            autoComplete='off' value={user.email}
                            onChange={handleinput} />
                        <p className="ferror"></p>
                    </div>
                    <div id="password">
                        Password: <input type="password" name="password" required
                            autoComplete='off' value={user.password}
                            onChange={handleinput} />
                        <p className="ferror"></p>
                    </div>
                    <div id="cpassword">
                        Re-Password: <input type="password" name="cpassword" required
                            autoComplete='off' value={user.cpassword}
                            onChange={handleinput} />
                        <p className="ferror"></p>
                    </div>
                </div>
                <button onClick={postdata}>Send</button>
            </form>
        </>
    )
};

export default Signup;