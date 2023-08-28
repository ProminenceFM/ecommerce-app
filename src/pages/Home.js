import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Productcard from "../components/Productcard";
import SpecialProduct from "../components/SpecialProduct"; 
import Blogcard from "../components/Blogcard";
import SeriesCard from "../components/SeriesCard";

const Home = () =>{
    return <>
        <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS</h4>
                                <h5>iPAD S13+ Pro</h5>
                                <p>From $999.00 0r $41.92/mo. <br />for 24mo. Footnote</p>
                                <p></p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>BEST SALES</h4>
                                    <h5>Laptops Max</h5>
                                    <p>From $999.00 0r $41.92/mo. <br />for 24mo. Footnote</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% OFF</h4>
                                    <h5>SmartWatch 7</h5>
                                    <p>SHops the latest Band<br />Styles and color.</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy iPad Air</h5>
                                    <p>From $599.00 0r $41.92/mo. <br />for 24mo. Footnote</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                 <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>FrEE Engraving </h4>
                                    <h5>AirPods Max</h5>
                                    <p>High-fidelity playback &<br />ultra-low distortion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 px-5">
                        <div className="services d-flex justify-content-between align-items-center">
                             <div className="d-flex align-items-center gap-15">
                                <img src="images/service.png" alt="services"/>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p className="mb-0">From all orders over $100</p>
                                </div>
                             </div>
                             <div className="d-flex align-items-center gap-15">
                                <img src="images/service-02.png" alt="services"/>
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p className="mb-0">Save Up to 25% off</p>
                                </div>
                             </div>
                             <div className="d-flex align-items-center gap-15">
                                <img src="images/service-03.png" alt="services"/>
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className="mb-0">Shop with an expert</p>
                                </div>
                             </div>
                             <div className="d-flex align-items-center gap-15">
                                <img src="images/service-04.png" alt="services"/>
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className="mb-0">Get Factory direct prices</p>
                                </div>
                             </div>
                             <div className="d-flex flex-wrap align-items-center gap-15">
                                <img src="images/service-05.png" alt="services"/>
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className="mb-0">100% Protected Payments</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap justify-content-beween align-items-center">
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>8 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>12 items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex  ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Home Apliances</h6>
                                    <p>22 items</p>
                                </div>
                                <img src="images/homeapp.jpg" alt="camera" />
                            </div>
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Speakers</h6>
                                    <p>5 items</p>
                                </div>
                                <img src="images/speaker.jpg" alt="camera" />
                            </div>
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>8 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex ps-3 align-items-center gap-10">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>12 items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="featured-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collections</h3>
                    </div>
                    <Productcard />
                    <Productcard />
                    <Productcard />
                    <Productcard />
                </div>
            </div>
        </section>
        <section className="famous-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card bg-dark position-relative">
                            <img className="img-fluid" src="images/speaker.jpg" alt="laptop"/>
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series</h6>
                                <p>Kids headphones bulk 10 packs </p>
                            </div>
                        </div>
                    </div>
                    <SeriesCard />
                    <SeriesCard />
                    <SeriesCard />
                </div>
            </div>
        </section>
        <section className="special-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                    <div className="row">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                    <Productcard />
                    <Productcard />
                    <Productcard />
                    <Productcard />
                </div>
            </div>
        </section>
        <section className="marquee-wrapper py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25"><img src="images/brand-01.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-02.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-03.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-04.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-05.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-06.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-07.png" alt="brand"/></div>
                                <div className="mx-4 w-25"><img src="images/brand-08.png" alt="brand"/></div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                </div>
            </div>
        </section>
    </>
};

export default Home;
