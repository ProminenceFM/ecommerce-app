import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Productcard from '../components/Productcard';
import Color from '../components/Color';

const OurStore = () => {
    const [grid, setGrid] = useState(4); 
  return (
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title= "Our Store"/>
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li><Link to="/">Watch</Link></li>
                                    <li><Link to="/">Tv</Link></li>
                                    <li><Link to="/">Camera</Link></li>
                                    <li><Link to="/">Laptop</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By </h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" for="">In Stock [2]</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" for="">Out of Stock [0]</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div className="d-flex flex-wrap">
                                   <Color />
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-1" />
                                        <label className="form-check-label" htmlFor="size-1">S [2]</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-2" />
                                        <label className="form-check-label" htmlFor="size-2">M [0]</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-1" />
                                        <label className="form-check-label" htmlFor="size-1">L [3]</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-2" />
                                        <label className="form-check-label" htmlFor="size-2">XL [1]</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="bg-light text-secondary badge px-3 py-2 rounded-3">
                                        Headphone
                                    </span>
                                    <span className="bg-light text-secondary badge px-3 py-2 rounded-3">
                                        Laptop
                                    </span>
                                    <span className="bg-light text-secondary badge px-3 py-2 rounded-3">
                                        Mobile
                                    </span>
                                    <span className="bg-light text-secondary badge px-3 py-2 rounded-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Products</h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids headphones bulk 10 packs for the whales toy</h5>
                                        <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={false} />
                                        <b>$300.00</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids headphones bulk 10 packs for the whales toy</h5>
                                        <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={false} />
                                        <b>$300.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex algn-items-center">
                                    <p className="d-block mb-0"  style={{"width":"100px"}}>Sort By:</p>
                                    <select name="" className="form-control form-select">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A - Z</option>
                                        <option value="title-descending">Alphabetically, Z - A</option>
                                        <option value="price-ascending">Price, Low to High</option>
                                        <option value="price-descending">Price, High to Low</option>
                                        <option value="created-ascending">Date, Old to New</option>
                                        <option value="created-ascending">Date, New to Old</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">21 Products</p>
                                    <div className="d-flex grid align-items-center gap-10">
                                        <img className="img-fluid d-block" src="images/gr4.svg" alt="grid" onClick={()=>{setGrid(3);}}></img>
                                        <img className="img-fluid d-block" src="images/gr3.svg" onClick={()=>{setGrid(4);}} alt="grid"></img>
                                        <img className="img-fluid d-block" src="images/gr2.svg"onClick={()=>{setGrid(6);}} alt="grid"></img>
                                        <img className="img-fluid d-block" src="images/gr.svg" onClick={()=>{setGrid(12)}} alt="grid"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-list pb-5">
                            <Productcard grid={grid} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore;