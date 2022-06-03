import React from "react";
import {Link} from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

const Navbar = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLogged = isExpired(localStorage.getItem('token'));

    return (
        <div>
            {user && <h4 style={{float: 'left'}}>User: {user.name}</h4>}
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">Home</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link to="/posts" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">Posts</Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        {isNotLogged && <li className="nav-item" role="presentation">
                            <Link to="/login" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">Login</Link>
                        </li>}
                        {isNotLogged && <li className="nav-item" role="presentation">
                            <Link to="/signUp" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true">SignUp</Link>
                        </li>}
                        {!isNotLogged && <li className="nav-item" role="presentation">
                            <a href="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                               aria-controls="pills-home" aria-selected="true" onClick={() => localStorage.removeItem('token')}>LogOut</a>
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

