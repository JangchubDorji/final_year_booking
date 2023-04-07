/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import "./navbar.css"
import image from "./Doro Zam.jpg"
import pic from "./san.jpg"
import yum from "./Yum.jpg"
import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
export default function Navbar() {

  return (
    <div className="first-section">
                    <nav className="navbar navbar-expand-lg bg-primary ">
                        <a className="navbar-brand" href="con"><h1>Tickets Booking</h1></a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="Footer">Contact</a>
                                     </li>
                                     <li className="nav-item">
                                        <a className="nav-link" href="Footer">Sign In</a>
                                     </li>
                                     <li className="nav-item">
                                        <a className="nav-link" href="Footer">Register</a>
                                      </li>
                                </ul>
                            </div>
                        </nav> 
                        <div className='second'>
                        <h3 className='heading'>ALL MOVIES LIST</h3>
                        <div className='container mt-3'>
                            <div className='card'>
                        
                                <img  className='card-img-top' src={image} alt="poster" />
                            <div class="card-body">
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={pic} alt="poster" />
                            <div class="card-body">
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={yum} alt="poster" />
                            <div class="card-body">
                           
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={image} alt="poster" />
                            <div class="card-body">
                          
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={pic} alt="poster" />
                            <div class="card-body">
                            
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={yum} alt="poster" />
                            <div class="card-body">
                          
                            
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={pic} alt="poster" />
                            <div class="card-body">
                          
                            
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                            <div className='card'>
                                <img  className='card-img-top' src={yum} alt="poster" />
                            <div class="card-body">
                            
                            <a href="here" className="btn btn-info">View details</a>
                            </div>
                            </div>
                        </div>
                        <div className='social-icons'>
                        <FontAwesomeIcon icon={faTwitter} size="3x" color='#16FF00' />
                        <FontAwesomeIcon icon={faFacebook} size="3x" color='#16FF00'   />
                        <FontAwesomeIcon icon={faInstagram} size="3x" color='#16FF00'  />
                        </div> 
                        </div>
                 </div>
  )
}


