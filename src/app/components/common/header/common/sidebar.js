import React, { Component } from "react";
import "./index.scss";
import "./sidebar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSide: false,
      clothing: false,
      bags: false,
      footwear: false,
      accesories: false,
      beauty: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount() {}
  toggleMenu(opt) {
    this.setState(state => ({
      ...state,
      [opt]: !state[opt]
    }));
  }
  toggleNav() {
    this.setState(state => ({
      ...state,
      openSide: !state.openSide
    }));
  }

  render() {
    return [
      <a href="#" onClick={this.toggleNav}>
        <div className="bar-style">
          {" "}
          <i className="fa fa-bars sidebar-bar" aria-hidden="true" />
        </div>
      </a>,
      <div
        id="mySidenav"
        className={this.state.openSide ? "sidenav open-side" : "sidenav"}
      >
        <a href="#" className="sidebar-overlay" onClick={this.toggleNav} />
        <nav>
          <div onClick={this.toggleNav}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true" /> Back
            </div>
          </div>
          {/*Vertical Menu*/}
          <ul id="sub-menu" className="sm pixelstrap sm-vertical ">
            <li>
              <a
                href="#"
                onMouseLeave={() => {
                  this.toggleMenu("clothing");
                }}
                onMouseEnter={() => {
                  this.toggleMenu("clothing");
                }}
                className={
                  this.state.clothing
                    ? "has-submenu highlighted"
                    : "has-submenu "
                }
              >
                clothing
                <span className="sub-arrow" />
              </a>
              <ul
                className={
                  this.state.clothing
                    ? "mega-menu clothing-menu open-menu menu-fullpage"
                    : "mega-menu clothing-menu"
                }
                onMouseLeave={() => {
                  this.toggleMenu("clothing");
                }}
                onMouseEnter={() => {
                  this.toggleMenu("clothing");
                }}
              >
                <li>
                  <div className="row m-0">
                    <div className="col-xl-4">
                      <div className="link-section">
                        <h5>women's fashion</h5>
                        <ul>
                          <li>
                            <a href="#">dresses</a>
                          </li>
                          <li>
                            <a href="#">skirts</a>
                          </li>
                          <li>
                            <a href="#">westarn wear</a>
                          </li>
                          <li>
                            <a href="#">ethic wear</a>
                          </li>
                          <li>
                            <a href="#">sport wear</a>
                          </li>
                        </ul>
                        <h5>men's fashion</h5>
                        <ul>
                          <li>
                            <a href="#">sports wear</a>
                          </li>
                          <li>
                            <a href="#">western wear</a>
                          </li>
                          <li>
                            <a href="#">ethic wear</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="link-section">
                        <h5>accessories</h5>
                        <ul>
                          <li>
                            <a href="#">fashion jewellery</a>
                          </li>
                          <li>
                            <a href="#">caps and hats</a>
                          </li>
                          <li>
                            <a href="#">precious jewellery</a>
                          </li>
                          <li>
                            <a href="#">necklaces</a>
                          </li>
                          <li>
                            <a href="#">earrings</a>
                          </li>
                          <li>
                            <a href="#">wrist wear</a>
                          </li>
                          <li>
                            <a href="#">ties</a>
                          </li>
                          <li>
                            <a href="#">cufflinks</a>
                          </li>
                          <li>
                            <a href="#">pockets squares</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <a href="#" className="mega-menu-banner">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/mega-menu/fashion.jpg`}
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                onMouseLeave={() => {
                  this.toggleMenu("bags");
                }}
                onMouseEnter={() => {
                  this.toggleMenu("bags");
                }}
                className={
                  this.state.bags ? "has-submenu highlighted" : "has-submenu "
                }
              >
                bags
                <span className="sub-arrow" />
              </a>
              <ul
                className={
                  this.state.bags
                    ? "mega-menu bags-menu open-menu menu-fullpage-bags"
                    : "mega-menu bags-menu"
                }
                onMouseLeave={() => {
                  this.toggleMenu("bags");
                }}
                onMouseEnter={() => {
                  this.toggleMenu("bags");
                }}
              >
                <li>
                  <a href="#">shopper bags</a>
                </li>
                <li>
                  <a href="#">laptop bags</a>
                </li>
                <li>
                  <a href="#">clutches</a>
                </li>
                <li>
                  <a href="#">purses</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    ];
  }
}

export default SideBar;
