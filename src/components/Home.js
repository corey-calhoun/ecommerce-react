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
                    <Product 
                     title='Phillips Sonicare Electriic Toothbrush'
                    image='https://m.media-amazon.com/images/I/51qX1PpW4fL._AC_SY480_.jpg'
                     price={39.99}
                     rating={4}
                    />
                    <Product 
                     title="Samsung Galaxy Z Flip 5G Factory Unlocked New Android Cell Phone | US Version Smartphone | 256GB Storage | Folding Glass Technology| Long-Lasting Mobile Battery | Mystic Bronze"
                     image="https://images-na.ssl-images-amazon.com/images/I/610XuNn9VHL._AC_SX679_.jpg"
                     price={1449.99}
                     rating={4}

                    />
                    
                    
                </div>
                <div className="home__row">
                <Product 
                     title="APC UPS, 1000VA Sine Wave UPS Battery Backup & Surge Protector, BR1000MS Backup Battery with AVR, (2) USB Charger Ports, Back-UPS PRO Uninterruptible Power Supply"
                     image="https://images-na.ssl-images-amazon.com/images/I/81hEAfuNHhL._AC_SY879_.jpg"
                     price={147.99}
                     rating={4}

                    />
                    <Product 
                     title="Yootech 2 in 1 Metal Wireless Charger, 10W Max Wireless Charging Stand with QC3.0 Adapter, Compatible with Galaxy Watch 42mm/46mm/Active2/1,Gear S3/S2/Sport,Galaxy S20/S10/S9/S8/Note10[Not for iWatch]"
                     image="https://images-na.ssl-images-amazon.com/images/I/71maE2pbE1L._AC_UL200_SR150,200_.jpg"
                     price={39.99}
                     rating={4}

                    />
                    <Product 
                     title=""
                     image=""
                     price=""
                     rating={3}

                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
