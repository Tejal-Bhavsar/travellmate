import React from 'react'
import Traveller from './Traveller.svg'
import  growth from './growth.svg'
import './Home.css'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import { NavLink } from 'react-router-dom';
 
export default function Home() {
    return (
    <div>
         <section id="header" className=" ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto d-flex justify-content-center flex-column">
                        <div className="row"> 
                          <div className="col-md-6 pt-5 pt-lg-0      order-2 order-1 d-flex flex-column justify-content-center">
                          <Fade top>
                                <h1 className="lost">NOT ALL THOSE WHO <span id="wander">WANDER </span> ARE <span id="wander"> LOST</span></h1>
                                <h2 className my-3>Collect Moments & Come To Life.</h2>
                            </Fade>
                             <Fade bottom>
                                <div className="mt-3">
                                <NavLink to="/services" >
                                        <button type="button" className="btn btn-primary go">Go Somewhere
                                        </button>
                                </NavLink>
                                </div>
                             </Fade>
                            </div>
                            {/* <Roll > */}
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img className="animated" src={Traveller} />
                                </div>
                            {/* </Roll> */}
                        </div>
                    </div>
                </div>
            </div>
          </section>
            
    </div>
    )
}
