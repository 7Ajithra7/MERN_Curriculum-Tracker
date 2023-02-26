import React from "react";
import { Link, Outlet } from "react-router-dom";
import StickyBox from "react-sticky-box";

const FacultyPanel = () => {
  return (
    <>
      <StickyBox offsetTop={20} offsetBottom={20} />
      <div className="container-faculty">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="school-outline"></ion-icon>
              </span>
              <span className="title">Curriculum Tracker</span>
            </a>
            <span></span>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title">Faculty Panel</span>
            </a>
            <span></span>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="clipboard-outline"></ion-icon>
              </span>
              <span className="title">Assigned Requirement</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="receipt-outline"></ion-icon>
              </span>
              <span className="title">Admin &nbsp;</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
              <span className="title">View Curriculum &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="cog-outline"></ion-icon>
              </span>
              <span className="title">Settings &nbsp;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="bag-outline"></ion-icon>
              </span>
              <span className="title">Password &nbsp;</span>
            </a>
          </li>
          <li>
            <Link to="/account" onClick={() => localStorage.clear()}>
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Logout &nbsp;</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* main */}
      <div className="main" id="facultypanelmain">
        <div className="topbar" id="topbarfaculty">
          <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div className="user">
            <img src="" alt="" />
          </div>
        </div>

        <div class="details">
          <div class="recentOrders">
            <div class="cardHeader">
              {/* mainbody of sidemenu*/}
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <center>
                  <Outlet />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default FacultyPanel;
