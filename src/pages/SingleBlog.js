import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title= "Dynamic Blog Name"/>
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blog" className="d-flex gap-10 align-items-center">
                                <HiOutlineArrowLeft /> Go Back to Blogs
                            </Link>
                            <h3 className="title"> A beautiful Sunday Morning Renaissance</h3>
                            <img className="my-4 img-fluid w-100" src="images/blog-3.webp" alt="blog-img" />
                            <p>On the Design tab of the ribbon, check out the Themes, Colors, and Fonts galleries to get a custom look with just a click.
                            Need another experience, education, or reference entry? You got it. Just click in the sample entries below and then click the plus sign that appears.
                            Looking for a matching cover letter? All you had to do was ask! On the Insert tab, select Cover Page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog