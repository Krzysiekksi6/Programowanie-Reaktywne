import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to="/home" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Home</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/posts" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;