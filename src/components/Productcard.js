import React  from "react";
import { Link,useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Productcard = (props)=>{ 
    
    const {grid}= props;
    let location = useLocation();

    return <div className={ `${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/store/product/:id" className="product-card position-relative">
            <div className="wishlist position-absolute">
                <Link><img src="images/wish.svg" alt="addwishlist" /></Link>
            </div>
            <div className="product-image">
                <img className="img-fluid" src="images/watch.jpg" alt="product img" />
                <img className="img-fluid" src="images/empty-cart.jpg" alt="product img" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6> 
                <h5 className="product-title">Kids headphones bulk 10 packs multi-color for students</h5>
                <ReactStars count={5} size={24} activeColor="#ffd700" value={3} edit={false} />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>lore24 nk jnjn jk  jjj iji jnk ui ji affdwyd wtdgwd fdtsdg s tsddt dtd wwdttdvtwdftwdfdw  twdftdfwd dwftwdfwd dtwfdwfd wgft 4tftff drrdr drdr...</p>
                <p className="price">$100.00</p>
            </div>
            <div className="position-absolute action-bar">
                <div className="d-flex flex-column gap-10">
                    <Link><img src="images/view.svg" alt="view" /></Link>
                    <Link><img src="images/prodcompare.svg" alt="compare" /></Link>
                    <Link><img src="images/add-cart.svg" alt="addcart" /></Link>
                </div>
            </div>
        </Link>
    </div>
};

export default Productcard;