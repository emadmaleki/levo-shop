import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CartReducer } from '../reducers/CartReducer/CartReducer';
import { CommentsReducer, MobileReducer, MobilesReducer } from '../reducers/MobilesReducer/MobilesReducer';
import { MenuReducer, SearchMenuReducer } from '../reducers/SettingsReducer/SettingsReducer';
import TicketsReducer, { TicketReducer } from '../reducers/TicketsReducer/TicketsReducer';
import { UserReducer, UsersReducer } from '../reducers/UsersReducer/UsersReducer';
import { getStorage } from '../../services/localStorage';
import { SearchReducer } from '../reducers/SearchReducer/SearchReducer';
import { FilterResReducer } from '../reducers/FilterResReducer/FilterResReducer';
import { OrderReducer, UserOrdersReducer } from '../reducers/OrdersReducer/OrdersReducer';

let reducers = combineReducers({
    mobiles: MobilesReducer,
    mobile: MobileReducer,
    menuStatus: MenuReducer,
    cart: CartReducer,
    user:UserReducer,
    users:UsersReducer,
    tickets : TicketsReducer,
    ticket:TicketReducer,
    searchStatus:SearchMenuReducer,
    searchResults : SearchReducer,
    filterResults : FilterResReducer,
    order : OrderReducer,
    userOrders : UserOrdersReducer,
    mobileComments:CommentsReducer
});

let state = {
    cart: getStorage('cart') ? getStorage('cart') : []
}

let store = createStore(reducers,state, applyMiddleware(thunk));

export default store;