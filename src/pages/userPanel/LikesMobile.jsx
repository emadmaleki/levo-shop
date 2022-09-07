import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col,Row } from 'reactstrap';
import { FetchUser } from '../../redux/actions/UserActions/UserActions';
import Title from '../../components/UserPanel/Title';
import { getStorage } from '../../services/localStorage';
import ProductsList from './../../components/User/ProductsList/ProductsList';
const LikesMobile = () => {
    let {user} = useSelector((state) => state);
    let dispatch = useDispatch();
    let id = getStorage("userInfo");

    
    
    return ( 
        <>
            <Title>Like Mobiles</Title>
            <ProductsList mobiles={user.user.likes}/>
        </>
     );
}
 
export default LikesMobile;