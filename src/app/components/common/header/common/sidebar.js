import React, { Component } from "react";
import "./index.scss";
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
              >
                clothing
              </a>
              <ul
                className={
                  this.state.clothing
                    ? "mega-menu clothing-menu open-menu"
                    : "mega-menu clothing-menu"
                }
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
              <a href="#">bags</a>
              <ul>
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
                  <ul>
                    <li>
                      <a href="#">purses</a>
                    </li>
                    <li>
                      <a href="#">wallets</a>
                    </li>
                    <li>
                      <a href="#">leathers</a>
                    </li>
                    <li>
                      <a href="#">satchels</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">footwear</a>
              <ul>
                <li>
                  <a href="#">sport shoes</a>
                </li>
                <li>
                  <a href="#">formal shoes</a>
                </li>
                <li>
                  <a href="#">casual shoes</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">watches</a>
            </li>
            <li>
              <a href="#">Accessories</a>
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
                  <a href="#">more..</a>
                  <ul>
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
                      <a href="#">accessories</a>
                      <ul>
                        <li>
                          <a href="#">ties</a>
                        </li>
                        <li>
                          <a href="#">cufflinks</a>
                        </li>
                        <li>
                          <a href="#">pockets squares</a>
                        </li>
                        <li>
                          <a href="#">helmets</a>
                        </li>
                        <li>
                          <a href="#">scarves</a>
                        </li>
                        <li>
                          <a href="#">more...</a>
                          <ul>
                            <li>
                              <a href="#">accessory gift sets</a>
                            </li>
                            <li>
                              <a href="#">travel accessories</a>
                            </li>
                            <li>
                              <a href="#">phone cases</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">belts & more</a>
                    </li>
                    <li>
                      <a href="#">wearable</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">house of design</a>
            </li>

            <li>
              <a href="#">beauty & personal care</a>
              <ul>
                <li>
                  <a href="#">makeup</a>
                </li>
                <li>
                  <a href="#">skincare</a>
                </li>
                <li>
                  <a href="#">premium beaty</a>
                </li>
                <li>
                  <a href="#">more</a>
                  <ul>
                    <li>
                      <a href="#">fragrances</a>
                    </li>
                    <li>
                      <a href="#">luxury beauty</a>
                    </li>
                    <li>
                      <a href="#">hair care</a>
                    </li>
                    <li>
                      <a href="#">tools & brushes</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">home & decor</a>
            </li>
            <li>
              <a href="#">kitchen</a>
            </li>
          </ul>
        </nav>
      </div>
    ];
  }
}

export default SideBar;
