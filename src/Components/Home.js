import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('./image/1 slider.jpg')} className="d-block w-100 imgSize" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./image/2 slider.jpg')} className="d-block w-100 imgSize" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./image/3 slider.jpg')} className="d-block w-100 imgSize" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <div className="container" style={{marginTop:"50px"}}>
                <h1>Best Schools</h1>
                <div className="row">

                    <div className='col-md-4 imgnew'>
                        <div className="card">
                            <img src={require('./image/delhi.jpg')} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Delhi Public School</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Admission Open</a>
                                </div>
                        </div>

                    </div>
                    <div className='col-md-4 imgnew'>
                        <div className="card">
                            <img src={require('./image/2abad.jpg')} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Bombey International School</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Admission Open</a>
                                </div>
                        </div>

                    </div>
                    <div className='col-md-4 imgnew'>
                        <div className="card">
                            <img src={require('./image/3study.jpg')} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Pride School Gujrat</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Admission Open</a>
                                </div>
                        </div>

                    </div>

                </div>

            </div>




        </>
    );
}

export default Home;