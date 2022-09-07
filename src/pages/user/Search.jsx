import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import ProductsList from '../../components/User/ProductsList/ProductsList';
import { SearchProducts } from '../../redux/actions/SearchActions/SearchActions';
import './../../styles/search.css';
import CmLoading from '../../components/User/Loading/CmLoading';

const Search = () => {
    let dispatch = useDispatch();
    let {searchResults} = useSelector(state => state);
    let params = useParams();
    let term = params.name;
    useEffect(() => {
        dispatch(SearchProducts(term));
    }, [term]);

    if (searchResults.loading) {
        return <CmLoading />
    }
    return ( 
        <>
            <section className='search-intro'>
                <h2 className='search-title'>Searched Term : {term}</h2>
            </section>
            <section className='search-items'>
                <section className='Fcontainer'>
                <ProductsList mobiles={searchResults.results}/>
                </section>
            </section>
        </>
     );
}
 
export default Search;