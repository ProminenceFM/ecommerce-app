import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = () =>{
    return <>
        <footer className="py-4">
             <div className="container-xxl">
                <div className="row">
                  <div className="col-5">
                        <div className="footer-top-data align-center d-flex gap-30">
                            <img src="images/newsletter.png" alt="newsletter" />
                            <h2 className="mb-0 text-white"> Sign Up for our Newsletter</h2>
                        </div>
                    </div>
                    <div className="col-7">
                     <div className="input-group py-1">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="your E-mail Address"
                                arial-label="your E-mail Address"
                                arial-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-2" id="basic-addon2"> Subscribe
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
             <div className="container-xxl">
                <div className="row">
                  <div className="col-4">
                    <h4 className="text-white mb-4">Contact Us</h4>
                    <div className="">
                        <address className="text-white fs-6">
                            No: 899 17th Avenue <br />
                            John Ukasima Plaza. <br />
                            Wuse, Abuja.
                        </address>
                        <a className="mb-1 text-white d-block mt-4" href="tel: +23481669573"> +234 65 685 6556</a>
                        <a className="mb-0 text-white d-block mt-4" href="mailto: folamart163@gmail.com">folamart163@gmail.com</a>
                        <div className="social-icons d-flex gap-30 fs-4">
                            <a className="text-white" href="/" ><BsLinkedin /></a>
                            <a className="text-white" href="/" ><BsInstagram /></a>
                            <a className="text-white" href="/" ><BsGithub /></a>
                            <a className="text-white" href="/" ><BsYoutube /></a>
                        </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <h4 className="text-white mb-4">Information</h4>
                    <div className="footer-links d-flex flex-column">
                        <Link className="py-2 mb-1 text-white" to="/privacy-policy">Privacy Policy</Link>
                        <Link className="py-2 mb-1 text-white" to="/refund-policy">Refund Policy</Link>
                        <Link className="py-2 mb-1 text-white" to="/shipping-policy">Shipping Policy</Link>
                        <Link className="py-2 mb-1 text-white" to="/terms-and-conditions">Terms of Service</Link>
                        <Link className="py-2 mb-1 text-white" to="/blog">Blogs</Link>
                    </div>
                  </div>
                  <div className="col-3">
                     <h4 className="text-white mb-4">Account</h4>
                     <div className="footer-links d-flex flex-column">
                        <Link className="py-2 mb-1 text-white" to="/about">About Us</Link>
                        <Link className="py-2 mb-1 text-white" to="/">Faq</Link>
                        <Link className="py-2 mb-1 text-white" to="/contact">Contact</Link>
                       
                    </div>
                  </div>
                  <div className="col-2">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <div className="footer-links d-flex flex-column">
                        <Link className="py-2 mb-1 text-white" to="/">Tablets</Link>
                        <Link className="py-2 mb-1 text-white" to="/">Laptops</Link>
                        <Link className="py-2 mb-1 text-white" to="/">Smart Phones</Link>
                        <Link className="py-2 mb-1 text-white" to="/">Headphones</Link>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xl">
                <div className="row">
                  <div className="col-12">
                        <p className="text-center mb-0 text-white">
                            &copy; {new Date().getFullYear()} powered by PromiNetworks
                        </p>
                    </div>
                </div>
            </div>

        </footer>
        
    </>
};

export default Footer;