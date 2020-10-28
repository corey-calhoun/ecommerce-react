import React from 'react'
import '../assets/css/Home.css'
import Product from './Product'

function Home() {


    return (
        <div className='home'>
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-NTAyODZlMmUt-w3000._CB417503089_.jpg" 
                alt=""
                />
                
                <div className="home__row">
                    <Product />
                    <Product />
                    
                    
                </div>
                <div className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>
            </div>
        </div>
    )
}

export default Home;
