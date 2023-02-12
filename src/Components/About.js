
import React from "react";
import "./About.css";

function About() {

    return (
        <>

            <div className="container-fluid">

                <h1>Education is Our Policy</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <img src={require('./image/schoolbus.jpg')} className="card-img-top imgSize" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <img src={require('./image/Library.jpg')} className="card-img-bottom imgSize" alt="..."/>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <img src={require('./image/canteenjpg.jpg')} className="card-img-top imgSize" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <img src={require('./image/ground.jpg')} className="card-img-bottom imgSize" alt="..."/>
                        </div>

                    </div>

                </div>

            </div>


        </>


    );

}

export default About;