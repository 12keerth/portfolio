import React, { Component } from 'react';
import bar from'./image/bar.svg';
import circle from './image/circle.svg';
import cart from './image/cart.svg';
import {Link} from'react-router-dom';
import './header.css';
export class Header extends Component{

    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle} = this.state;
        return (
           <header>
            <div className="menu" onClick={this.menuToggle}>
             <img src={bar} alt="" width="20"/>
        </div>
        <div className="logo">
            <h1><Link to="/">NIKE</Link></h1>
        </div>
        <nav>
            <ul className={toggle ? "toggle" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login / Register</Link></li>
                <li className="close" onClick={this.menuToggle}>
                    <img src={circle} alt="" width="20"/>
                </li>
            </ul>
            <div className="nav-cart">
                <span>0</span>
                <Link to="/cart">
                <img src={cart} alt="" width="20"/>
                </Link>
            </div>
        </nav>
           </header>
        )
    }
}
export default Header