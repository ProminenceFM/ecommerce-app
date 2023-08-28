import React from 'react';
import {useState} from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Productcard from '../components/Productcard';
import ReactStars from 'react-rating-stars-component';

const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] =  useState(true);
  return (
    <>
        <Meta title={"Product Names"} />
        <BreadCrumb title= "Product Names"/>
        <section className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="policy">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                         <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>Monitoring and provision of these service is done through the Ministerial SERVICOM Committee nissues bordering on service delivery are sent to Management for action.    
                            OBLIGATIONS/EXPECTATIONS FROM OUR CUSTOMERS
                            It is expected that customers shall:
                            i.	Have access to the Commission’s Service Charter which will be produced as Hand Book and Hand Bills displayed at its Reception
                            ii.	Submit in writing, all request in writing all  require  the  attention of the commission.
                            iii.	Show understanding  for  some constraints  within which the Commission.
                            iv.	Provide  all   necessary   information   that  the   commission
                            v.	Provide feedback to facilitate  regular  assessment/complaints
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="review-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="d-flex align-items-end review-head justify-content-between">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex gap-10 align-items-center">
                                        <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={false} /><p className="mb-0">Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                <div >
                                    <a className="text-dark text-decoration-underline" href="/">Write a Review</a>
                                </div>
                                )}
                            </div>
                            <div className="review-form mt-3">
                                <h4 className="mb-2">Write a Review</h4>
                                <form action="" className="d-flex flex-column gap-20">
                                    <div>
                                        <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={true} />
                                    </div>
                                    <div>
                                        <textarea type="text" cols={30} rows={4} className="form-control w-100"  placeholder="Comments"></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className="mb-0">Prominent</h6>
                                        <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={false} />
                                    </div>
                                    <p className="mt-3">
                                    Check out the few quick tips below to help you get started. To replace any tip text with your own, just click it and start typing. 
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">You May also like</h3>
                    </div>
                    <Productcard />
                    <Productcard />
                    <Productcard />
                    <Productcard />
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleProduct;