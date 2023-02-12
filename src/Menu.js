import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"lightgreen"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{fontFamily:"sans-serif",fontWeight:"bold" , color:"black" }}>EDUCATION</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active ggg" aria-current="page"><NavLink exact to="/"> Home </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ggg"><NavLink exact to="/about"> About US </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ggg"> <NavLink exact to="/contact"> Contact US </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ggg"><NavLink exact to="/demo"> Demo </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ggg"><NavLink exact to="/user"> User </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ggg"><NavLink exact to="/link"> Link </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ggg"><NavLink exact to="/data"> Data </NavLink></a>
                            </li>
                            
                            

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            
            
           
            
            



        </>




    );



}

export default Menu;