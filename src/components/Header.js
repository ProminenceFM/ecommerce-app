import React from "react";
import {NavLink, Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Header = () =>{
    return <>
        <header className="header-top-strip py-2">
            <div className="container-xxl">
                <div className="row">
                     <div className="col-6">
                        <p className="text-white mb-0">Free shipping over $100 and Free Returns</p>
                     </div>
                     <div className="col-6">
                        <p className="text-end text-white mb-0">Hotline:
                            <a className="text-white" href="tel: 09099638670"> +234 886 765 6576</a>
                        </p>
                     </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h2 className="mb-0">
                            <Link className="text-white">PromiDev</Link>
                        </h2>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="search product here..."
                                arial-label="search product here..."
                                arial-describedby="basic-addon2"
                            />
                            <span className="input-group-text" id="basic-addon2"> <BsSearch className="fs-6" />
                            </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="header-upper-links d-flex align-items-center justify-content-between ">
                            <div>
                                <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/compare.svg" alt="compare"/>
                                    <p className="mb-0">Compare <br /> Products</p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/wishlist.svg" alt="wishlist"/>
                                    <p className="mb-0">Favorite <br />Wishlist </p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                                <img src="images/user.svg" alt="user"/>
                                    <p className="mb-0">Log In <br />My Account </p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                <img src="images/cart.svg" alt="wishlist"/>
                                <div className="d-flex flex-column">
                                    <span className="badge bg-danger text-white">0</span>
                                    <p className="mb-0">$ 500</p>
                                </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-buttom align-items-center d-flex">
                            <div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/menu.svg" alt="Menu" /><span className="me-5 d-inline-block">Shop Categories</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                                    <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                                </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="align-items-center d-flex gap-15">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/store">Our Stores</NavLink >
                                    <NavLink to="/blog">Blogs</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
};

export default Header;
