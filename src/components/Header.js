import React from 'react'
import './../assets/css/Header.css'

// icons and components
import { ShoppingCartOutlined } from '@material-ui/icons'
import SearchBar from 'material-ui-search-bar'
import logo from '../assets/img/amazon-logo.png'


function Header() {
    return (
        <div className='header'>
            <img 
             className="header__logo"
             src={logo}
             alt=""
            />
            <div className="header__searchContainer">
                <SearchBar 
                 className="header__searchBar"
                 onChange={(newValue) => this.setState({ value: newValue })}
                 onRequestSearch={() => (this.state.value)}
                />
            </div>
            <div className="header__right">
                <div className="optionOne">
                    <span className="header__optionLineOne">Hello </span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="optionTwo">
                    <span className="header__optionLineOne">Returns </span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="optionThree">
                    <span className="header__optionLineOne">Your </span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="optionBasket">
                    <ShoppingCartOutlined className="optionLineOne"/>
                    <span className="header__optionLineTwo basket__count">0</span>
                </div>      
            </div>
            
        </div>
    )
}

export default Header
