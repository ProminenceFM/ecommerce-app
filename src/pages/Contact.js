import React from "react";
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi';


const Contact = () =>{
    return <>
        <Meta title={"Contact Us"} />
        <BreadCrumb title= "Contact Us"/>
        <div className="contact-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper justify-content-between d-flex">
                            <div>
                                <h3 className="contact-title">Contact</h3>
                                <form action="" className="d-flex flex-column gap-20">
                                    <div>
                                        <input type="text" className="form-control"  placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control"  placeholder="E-mail"/>
                                    </div>
                                    <div>
                                        <input type="tel" placeholder="Mobile Number"
                                        className="form-control" />
                                    </div>
                                    <div>
                                        <textarea type="text" cols={30} rows={4} className="form-control w-100"  placeholder="Comments"></textarea>
                                    </div>
                                    <div>
                                        <button className="button">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 gap-15 d-flex align-items-center"><AiOutlineHome />
                                        <address className="mb-0">12TH Avenue, Richy Bus Stop Lokoja.</address></li>
                                        <li  className="mb-3 gap-15 d-flex align-items-center"><BiPhoneCall />
                                        <a href="tel:+2348166859473">+234 81 6685 9473</a></li>
                                        <li  className="mb-3 gap-15 d-flex align-items-center"><AiOutlineMail />
                                        <a href="mailto:folamart163@gmail.com">folamart163@gmail.com</a></li>
                                        <li  className="mb-3 gap-15 d-flex align-items-center"><BiInfoCircle />
                                        <p className="mb-0">Mondays - Fridays 10AM - 8PM</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Contact;