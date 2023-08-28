import React from "react";
import {Link,useLocation} from "react-router-dom";

const Blogcard = ()=>{
    let location = useLocation();

    return <div className={`${location.pathname === "/blog" ? "gr-6" : "col-3"}`}>
        <div className="blog-card">
            <div className="card-image">
                <img className="img-fluid" src="images/blog-1.jpg" alt="blog img"/>
            </div>
            <div className="blog-content">
                <p className="date">1 June, 2023</p>
                <h5 className="title">A beautiful Sunday Morning Renaissance</h5>
                <p className="desc">You are only as good as your connection which is an ...</p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
    </div>
};

export default Blogcard;