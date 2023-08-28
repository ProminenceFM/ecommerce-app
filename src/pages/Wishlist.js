import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title= "Wishlist"/>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="wishlist-image">
                  <img className="position-absolute cross img-fluid" src="images/cross.svg" alt="cancel" />
                  <div className="product-card-image">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                  </div>
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Honor T 1 7.0 1GB RAM 8GB ROM Inch with WI-Fi + 3GB Tablet</h5>
                  <h6 className="price mt-3 mb-3">$100.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="wishlist-image">
                  <img className="position-absolute cross img-fluid" src="images/cross.svg" alt="cancel" />
                  <div className="product-card-image">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                  </div>
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Honor T 1 7.0 1GB RAM 8GB ROM Inch with WI-Fi + 3GB Tablet</h5>
                  <h6 className="price mt-3 mb-3">$100.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <div className="wishlist-image">
                  <img className="position-absolute cross img-fluid" src="images/cross.svg" alt="cancel" />
                  <div className="product-card-image">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                  </div>
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Honor T 1 7.0 1GB RAM 8GB ROM Inch with WI-Fi + 3GB Tablet</h5>
                  <h6 className="price mt-3 mb-3">$100.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist;