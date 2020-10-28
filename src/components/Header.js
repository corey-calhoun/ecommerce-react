import { ShoppingCartOutlined } from '@material-ui/icons'
import SearchBar from 'material-ui-search-bar'
import React from 'react'
import './../assets/css/Header.css'
function Header() {
    return (
        <div className='header'>
            <img 
             className="header__logo"
             src="https://image-placeholder.com/images/actual-size/120x90.png"
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
                <div className="header__options">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello </span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns </span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                    <div className="header__option">
                        <ShoppingCartOutlined
                            
                        />
                    </div>
                </div>
                
                            
            </div>
            
        </div>
    )
}

export default Header
