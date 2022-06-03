import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUp";
import { isExpired } from "react-jwt";
import {Navigate} from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="posts" element={isExpired(localStorage.getItem('token')) ?
                        <Navigate replace to="/home"/> : <Posts/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="signUp" element={<SignUpForm/>}/>
                    <Route        path="*"
                                  element={
                                      <NotFound/>
                                  }
                    />
                </Route>


            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
