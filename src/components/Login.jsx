import { React, useState, useEffect } from 'react';
import { link, useNavigate } from "react-router-dom";

const Login = () => {
    const [UserName, setUserName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("UserName", name)
    }, [UserName])
    useEffect(() => {
        localStorage.setItem("inputPassword", password)
    }, [])
    const name = localStorage.getItem('UserName') ?
        localStorage.getItem('UserName') : 'basil';


    const password = localStorage.getItem('InputPassword') ?
        localStorage.getItem('InputPassword') : '1';

    const login = (e) => {
        if (!UserName || !inputPassword) {
            alert("user name or password will also fill");
        }
        else if (UserName === name && inputPassword === password) {
            alert('welcome to my wibsite ')
            navigate("/home")


        }
        else {
            alert('enter the valid user name or password')
        }

    };

    return (
        <>
            <div className="container bg-info vh-100 d-flex justify-content-center align-items-center">
                <div className="page bg-light w-50 h-50 ">
                    <div className="login d-flex justify-content-center">
                        <h1>
                            <i class="fa-solid fa-user"></i>
                        </h1>
                        <h3>LOGIN</h3>
                    </div>
                    <form onSubmit={login} className="">
                        <div className="mb-3 row justify-content-center ">
                            <label htmlFor="UserName" className="col-sm-2 col-form-label">
                                User Name
                            </label>
                            <div className="col-sm-6">
                                <input type="text"
                                    className="form-control"
                                    id="UserName"
                                    value={UserName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center ">
                            <label
                                htmlFor="inputPassword"
                                className="col-sm-2 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    value={inputPassword}
                                    onChange={(e) => setInputPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div
                            className="col-md-3 offset-5  btn btn-sm btn-success my-4 "
                            onClick={login}
                        >
                            <a
                                href="#"
                                typeof="button"
                                className="text-light text-decoration-none px-5 "
                            >
                                login{" "}
                            </a>
                        </div>
                    </form>

                    <p className="mx-3">
                        If you have not register then{" "}
                        <a href="./mycomponet/RegisterPage">Register &amp; now</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login