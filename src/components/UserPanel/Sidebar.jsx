import React, { useEffect } from 'react';
import { EditOutlined, EnvironmentFilled, HomeOutlined, InfoOutlined, LikeOutlined, LogoutOutlined, OrderedListOutlined, PaperClipOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage } from '../../services/localStorage';
import {FetchUser} from './../../redux/actions/UserActions/UserActions';
const Sidebar = () => {

    let dispatch = useDispatch();
    let {user} = useSelector(state => state);
    let profile = user?.user;
    let id = getStorage('userInfo');

    useEffect(() => {
            dispatch(FetchUser(id));
    }, []);

    let loc = useLocation();
    return ( 
        <>
            <section className='up-sidebar'>
                                <section className='up-menu'>
                                    <ul>
                                        <li className={`up-menu-item ${loc.pathname == '/panel' ? 'active' : ''}`}>
                                            <Link to="/panel"><HomeOutlined/><p>Panel</p></Link>
                                        </li>
                                        <li className={`up-menu-item ${loc.pathname == '/panel/info' ? 'active' : ''}`}>
                                            <Link to="/panel/info"><InfoOutlined/><p>Information</p></Link>
                                        </li><li className={`up-menu-item ${loc.pathname == '/panel/editInfo' ? 'active' : ''}`}>
                                            <Link to="/panel/editInfo"><EditOutlined/><p>Edit Info</p></Link>
                                        </li><li className={`up-menu-item ${loc.pathname == '/panel/orders' ? 'active' : ''}`}>
                                            <Link to="/panel/orders"><OrderedListOutlined/><p>Orders</p></Link>
                                        </li> 
                                        <li className={`up-menu-item ${loc.pathname == '/panel/tickets' ? 'active' : ''}`}>
                                            <Link to="/panel/tickets"><PaperClipOutlined/><p>Tickets</p></Link>
                                        </li>
                                        <li className={`up-menu-item ${loc.pathname == '/panel/likes' ? 'active' : ''}`}>
                                            <Link to="/panel/likes"><LikeOutlined/><p>Likes Mobile</p></Link>
                                        </li>
                                        <li className={`up-menu-item ${loc.pathname == '/logout' ? 'active' : ''}`}>
                                            <Link to="/logout"><LogoutOutlined/><p>LogOut</p></Link>
                                        </li>
                                    </ul>
                                </section>
                            </section>
        </>
     );
}
 
export default Sidebar;