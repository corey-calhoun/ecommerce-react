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
            
        </div>
    )
}

export default Header
