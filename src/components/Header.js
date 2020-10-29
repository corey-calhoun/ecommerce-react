import React from 'react'
import './../assets/css/Header.css'

// icons and components
import { ShoppingCartOutlined } from '@material-ui/icons'
import SearchBar from 'material-ui-search-bar'
import logo from '../assets/img/amazon-logo.png'
import { Link } from  'react-router-dom'


function Header() {
    return (
        <div className='header'>
            <Link to="/ ">
                <img 
                 className="header__logo"
                 src={logo}
                 alt=""
            />
            </Link>
            
            <div className="header__searchContainer">
                <SearchBar 
                 className="header__searchBar"
                 onChange={(newValue) => this.setState({ value: newValue })}
                 onRequestSearch={() => (this.state.value)}
                />
            </div>
            <div className="header__right">
                <Link to="/signIn">
                    <div className="optionOne">
                        <span className="header__optionLineOne">Hello </span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="optionTwo">
                        <span className="header__optionLineOne">Returns </span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/account">
                    <div className="optionThree">
                        <span className="header__optionLineOne">Your </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="optionBasket">
                    <ShoppingCartOutlined className="optionLineOne"/>
                    <span className="header__optionLineTwo basket__count">0</span>
                </div> 
                </Link>
                     
            </div>
            
        </div>
    )
}

export default Header
