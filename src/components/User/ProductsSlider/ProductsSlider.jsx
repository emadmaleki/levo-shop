import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../services/evoUrl';
import MobileSlider from '../Slider/MobilesSlider';
import './../../../styles/sliders.css';

const ProductSlider = () => {
    let dispatch = useDispatch();
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        let data = get('/products').then(res => {
            setMobiles(res.data);
        });
    }, []);

    return ( 
        <section className='products_slider'>
            <section className='Fcontainer'>
                <h2 className='products-slider-title'>Last Products</h2>
                <MobileSlider items={mobiles}></MobileSlider>
            </section>
        </section>
     );
}
 
export default ProductSlider;