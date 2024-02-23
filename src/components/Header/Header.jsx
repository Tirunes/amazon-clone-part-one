import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import classes from './Header.module.css'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"

function Header() {
 const [{user, basket }, dispatch] = useContext(DataContext)
 console.log(basket.length)
 const totalItem = basket?.reduce((amount, item) => {
   return item.amount + amount
 }, 0)


return (
  <section className={classes.fixed}>
    <section>
      <div className={classes.header_container}>
        {/* logo section */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* icons */}
          <div className={classes.delivery}>
            {/* delivery */}
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* search bar */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search the product here" />

          <BsSearch size={38} />
        </div>
        {/* right side of header */}

        <div className={classes.order_container}>
          <Link to="/" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt=""
            />
            {/* <select name="" id="">
              <option value="">EN</option>
            </select> */}

            <select>
              <option value="">EN</option>
            </select>
          </Link>
          {/* <div className={classes.Header_order_container}> </div> */}

          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => (user ? auth.signOut() : null)}>
                    Sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          {/* orders */}

          <Link to="/orders">
            <p>returns</p>
            <span>& orders</span>
          </Link>

          {/* cart */}

          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            {/* <span>{basket.length}</span> */}
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
    </section>

    <LowerHeader />
  </section>
);
}

export default Header








   {
     /* short write method div>p+span and select emmey aberivation */
   }