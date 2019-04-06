import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            navClose:{right:'0px'}
        }
    }

    componentWillMount (){

    }

    openNav() {
        this.setState({navClose: {right:'0px'}})
    }
    closeNav() {
        this.setState({navClose: {right:'-410px'}})
    }
    render() {
        const {translate} = this.props;
        return (
            <div>
                <nav id="main-nav">
                    <div className="toggle-nav" onClick={this.openNav.bind(this)}>
                        <i className="fa fa-bars sidebar-bar" ></i>
                    </div>
                    {/*Horizontal menu*/}
                    <ul id="main-menu" className="sm pixelstrap sm-horizontal" style={this.state.navClose}>
                        <li >
                            <div className="mobile-back text-right" onClick={this.closeNav.bind(this)}>
                                Back<i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                            </div>
                        </li>
                        <li className="mega"><Link to={`/`}>home</Link></li>
                        <li className="mega">
                            <a href="#">features
                                <div className="lable-nav">new</div>
                            </a>
                            <ul className="mega-menu feature-menu">
                                <li>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <Link to={`/blog/blog-page`} >
                                                    <img src={`/assets/images/feature/blog-page.jpg`} alt="" />
                                                    <h6>blog_left_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`/blog/right-sidebar`} >
                                                    <img src={`/assets/images/feature/blog(right-sidebar).jpg`} alt="" />
                                                    <h6>blog_right_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`/blog/details`} >
                                                    <img src={`/assets/images/feature/blog-detail.jpg`} alt="" />
                                                    <h6>blog_detail</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`/left-sidebar/collection`} >
                                                    <img src={`/assets/images/feature/category-page.jpg`} alt="" />
                                                    <h6>category_left_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`/right-sidebar/collection`} >
                                                    <img src={`/assets/images/feature/category-page(right).jpg`} alt=""/>
                                                    <h6>category_right_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`/no-sidebar/collection`} >
                                                    <img src={`/assets/images/feature/category-page(no-sidebar).jpg`} alt=""/>
                                                    <h6>category_no_sidebar</h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="mega"><a href="#">products</a>
                            <ul className="mega-menu feature-menu product-menu">
                                <li>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <Link to={`/left-sidebar/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(left-sidebar).jpg`} alt="" />
                                                    <h6>left_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/right-sidebar/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(right-sidebar).jpg`} alt="" />
                                                    <h6>right_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/no-sidebar/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(no-sidebar).jpg`} alt="" />
                                                    <h6>no_sidebar</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/col-left/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(3-col-left).jpg`} alt="" />
                                                    <h6>three_col_thumbnail_left</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/col-right/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(3-col-right).jpg`} alt="" />
                                                    <h6>three_col_thumbnail_right</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/column/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(3-column).jpg`} alt="" />
                                                    <h6>thumbnail_below</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/left-image/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(left-image).jpg`} alt="" />
                                                    <h6>thumbnail_left</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`/right-image/product/1`}>
                                                    <img src={`/assets/images/feature/product-page(right-image).jpg`} alt="" />
                                                    <h6>thumbnail_right</h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">pages</a>
                            <ul>
                                <li><Link to={`/pages/about-us`} >about_us</Link></li>
                                <li><Link to={`/pages/404`} >404</Link></li>
                                <li><Link to={`/pages/lookbook`} >lookbook</Link></li>
                                <li><Link to={`/pages/login`} >login</Link></li>
                                <li><Link to={`/pages/register`} >register</Link></li>
                                <li><Link to={`/pages/search`} >search</Link></li>
                                <li><Link to={`/pages/collection`} >collection</Link></li>
                                <li><Link to={`/pages/forget-password`} >forget_password</Link></li>
                                <li><Link to={`/pages/contact`} >contact</Link></li>
                                <li><Link to={`/pages/dashboard`} >dashboard</Link></li>
                                <li><Link to={`/pages/faq`} >FAQ</Link></li>
                            </ul>
                        </li>
                        <li className="mega"><a href="#">shop</a>
                            <ul className="mega-menu full-mega-menu">
                                <li>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title"><h5>mens_fashion</h5></div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><a href="#">sports_wear</a></li>
                                                            <li><a href="#">top</a></li>
                                                            <li><a href="#">bottom</a></li>
                                                            <li><a href="#">ethic_wear</a></li>
                                                            <li><a href="#">sports_wear</a></li>
                                                            <li><a href="#">shirts</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title"><h5>women_fashion</h5></div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><a href="#">dresses</a></li>
                                                            <li><a href="#">skirts</a></li>
                                                            <li><a href="#">westarn_wear</a></li>
                                                            <li><a href="#">ethnic_wear</a></li>
                                                            <li><a href="#">sport_wear</a></li>
                                                            <li><a href="#">bottom_wear</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title"><h5>kids_fashion</h5></div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><a href="#">sport_wear</a></li>
                                                            <li><a href="#">ethnic_wear</a></li>
                                                            <li><a href="#">sport_wear</a></li>
                                                            <li><a href="#">top</a></li>
                                                            <li><a href="#">bottom_wear</a></li>
                                                            <li><a href="#">ethnic_wear</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title"><h5>accessories</h5></div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><a href="#">fashion_jewellery</a></li>
                                                            <li><a href="#">caps_and_hats</a></li>
                                                            <li><a href="#">precious_jewellery</a></li>
                                                            <li><a href="#">necklaces</a></li>
                                                            <li><a href="#">earrings</a></li>
                                                            <li><a href="#">rings_wrist_wear</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title"><h5>men_accessories</h5></div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><a href="#">ties</a></li>
                                                            <li><a href="#">cufflinks</a></li>
                                                            <li><a href="#">pockets_squares</a></li>
                                                            <li><a href="#">helmets</a></li>
                                                            <li><a href="#">scarves</a></li>
                                                            <li><a href="#">phone_cases</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row banner-padding">
                                        <div className="col-xl-6">
                                            <a href="#" className="mega-menu-banner"><img src={`/assets/images/mega-menu/1.jpg`} className="img-fluid d-none d-xl-block " alt="" /></a>
                                        </div>
                                        <div className="col-xl-6">
                                            <a href="#" className="mega-menu-banner"><img src={`/assets/images/mega-menu/2.jpg`} className="img-fluid d-none d-xl-block" alt="" /></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default NavBar;