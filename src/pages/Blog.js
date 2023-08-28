import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Blogcard from '../components/Blogcard';

const Blog = () => {
  return (
    <>
        <Meta title={"Our Blog"} />
        <BreadCrumb title= "News"/>
        <div className="blog-wrapper home-wrapper-2 py-5">
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
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-wrap gap-15">
                            <Blogcard className="mb-3" />
                            <Blogcard className="mb-3" />
                            <Blogcard className="mb-3"/>
                            <Blogcard className="mb-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog;