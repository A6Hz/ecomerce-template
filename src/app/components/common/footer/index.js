import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divName: "RTL",
      colorPick: false
    };
  }

  componentWillUnmount() {}

  ChangeRtl(divName) {}
  componentDidMount() {}

  showHideColor() {
    this.setState({ colorPick: !this.state.colorPick });
  }

  changeColor(color) {
    document
      .getElementById("color")
      .setAttribute("href", `/assets/css/` + color + `.css`);
  }

  render() {
    let color_style = this.state.colorPick
      ? { right: "0px" }
      : { right: "-190px" };
    let tap_to_top = { display: "none" };
    return (
      <footer className="footer-light">
        <div className="light-layout">
          <div className="container">
            <section className="small-section border-section border-top-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="subscribe">
                    <div>
                      <h4>KNOW IT ALL FIRST!</h4>
                      <p>
                        Never Miss Anything From Multikart By Signing Up To Our
                        Newsletter.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form className="form-inline subscribe-form">
                    <div className="form-group mx-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button type="submit" className="btn btn-solid">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <Link to={`/left-sidebar/collection`}>
                      <img src={`/assets/images/icon/logo.png`} alt="" />
                    </Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{" "}
                  </p>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link to={"https://www.facebook.com/"}>
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://plus.google.com/"}>
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://twitter.com"}>
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://instagram.com"}>
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to={"https://rss.com/"}>
                          <i className="fa fa-rss" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>my account</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <Link to={`/left-sidebar/collection`}>womens</Link>
                      </li>
                      <li>
                        <Link to={`/left-sidebar/collection`}>clothing</Link>
                      </li>
                      <li>
                        <Link to={`/left-sidebar/collection`}>accessories</Link>
                      </li>
                      <li>
                        <Link to={`/left-sidebar/collection`}>featured</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>why we choose</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">shipping & return</a>
                      </li>
                      <li>
                        <a href="#">secure shopping</a>
                      </li>
                      <li>
                        <a href="#">gallary</a>
                      </li>
                      <li>
                        <a href="#">affiliates</a>
                      </li>
                      <li>
                        <a href="#">contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>store information</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker" />
                        Multikart Demo Store, Demo store India 345-659
                      </li>
                      <li>
                        <i className="fa fa-phone" />
                        Call Us: 123-456-7898
                      </li>
                      <li>
                        <i className="fa fa-envelope-o" />
                        Email Us: <a href="#">Support@Fiot.com</a>
                      </li>
                      <li>
                        <i className="fa fa-fax" />
                        Fax: 123456
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer ">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p>
                    <i className="fa fa-copyright" aria-hidden="true" /> 2018-19
                    themeforest powered by pixelstrap
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={`/assets/images/icon/visa.png`} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={`/assets/images/icon/mastercard.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={`/assets/images/icon/paypal.png`} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={`/assets/images/icon/american-express.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={`/assets/images/icon/discover.png`} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addcart_btm_popup" id="fixed_cart_icon">
          <a
            href={null}
            className="fixed_cart"
            onClick={() => this.ChangeRtl(this.state.divName)}
          >
            {this.state.divName}
          </a>
        </div>
        <div className="color-picker" style={color_style}>
          <a
            href="#"
            className="handle"
            onClick={this.showHideColor.bind(this)}
          >
            <i className="fa fa-cog" />
          </a>
          <div className="sec-position">
            <div className="settings-header">
              <h3>Select Color1:</h3>
            </div>
            <div className="section">
              <div className="colors o-auto">
                <a
                  href="#"
                  className="color1"
                  onClick={() => this.changeColor("color1")}
                />
                <a
                  href="#"
                  className="color2"
                  onClick={() => this.changeColor("color2")}
                />
                <a
                  href="#"
                  className="color3"
                  onClick={() => this.changeColor("color3")}
                />
                <a
                  href="#"
                  className="color4"
                  onClick={() => this.changeColor("color4")}
                />
                <a
                  href="#"
                  className="color5"
                  onClick={() => this.changeColor("color5")}
                />
                <a
                  href="#"
                  className="color6"
                  onClick={() => this.changeColor("color6")}
                />
                <a
                  href="#"
                  className="color7"
                  onClick={() => this.changeColor("color7")}
                />
                <a
                  href="#"
                  className="color8"
                  onClick={() => this.changeColor("color8")}
                />
                <a
                  href="#"
                  className="color9"
                  onClick={() => this.changeColor("color9")}
                />
                <a
                  href="#"
                  className="color10"
                  onClick={() => this.changeColor("color10")}
                />
                <a
                  href="#"
                  className="color11"
                  onClick={() => this.changeColor("color11")}
                />
                <a
                  href="#"
                  className="color12"
                  onClick={() => this.changeColor("color12")}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tap-top top-cls"
          onClick={this.clickToTop}
          style={tap_to_top}
        >
          <div>
            <i className="fa fa-angle-double-up" />
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterOne;
