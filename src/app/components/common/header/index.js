import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./common/topbar";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import logo from "../../../assets/images/icon/logo.png";
import setting from "../../../assets/images/icon/setting.png";
import search from "../../../assets/images/icon/search.png";
export default ({ isAuthenticated, current }) => (
  <header id="sticky" className="sticky">
    <div className="mobile-fix-option" />
    <TopBar />
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="main-menu">
            <div className="menu-left">
              <div className="navbar">
                <SideBar />
              </div>
              <div className="brand-logo">
                <Link to={`/`}>
                  <img src={logo} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
            <div className="menu-right pull-right">
              <NavBar />
              <div>
                <div className="icon-nav">
                  <ul>
                    <li className="onhover-div mobile-search">
                      <div>
                        <img src={search} className="img-fluid" alt="" />
                      </div>
                      <div id="search-overlay" className="search-overlay">
                        <div>
                          <span className="closebtn" title="Close Overlay">
                            ×
                          </span>
                          <div className="overlay-content">
                            <div className="container">
                              <div className="row">
                                <div className="col-xl-12">
                                  <form>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Search a Product"
                                      />
                                    </div>
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      <i className="fa fa-search" />
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-div mobile-setting">
                      <div>
                        <img src={setting} className="img-fluid" alt="" />
                      </div>
                      <div className="show-div setting">
                        <h6>language</h6>
                        <ul>
                          <li>
                            <a href={null}>English</a>{" "}
                          </li>
                          <li>
                            <a href={null}>French</a>{" "}
                          </li>
                        </ul>
                        <h6>currency</h6>
                        <ul className="list-inline">
                          <li>
                            <a href={null}>euro</a>{" "}
                          </li>
                          <li>
                            <a href={null}>rupees</a>{" "}
                          </li>
                          <li>
                            <a href={null}>pound</a>{" "}
                          </li>
                          <li>
                            <a href={null}>doller</a>{" "}
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/*Header Cart<CartContainer/> Component */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
