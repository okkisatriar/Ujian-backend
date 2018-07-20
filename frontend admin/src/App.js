import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import User from './component/User';
import Product from './component/Product';
import Invoice from './component/Invoice';
import Invoiceprint from './component/Invoiceprint';

class App extends Component 
{
    render() 
    {
        return (
                    <div>                        
                        <Route exact path="/" component={Login}/>
                        <Route path="/User" component={User}/>
                        <Route path="/Product" component={Product}/>                        
                        <Route path="/Invoice" component={Invoice}/>
                        {/* <Header /> */}
                        <Route path="/Dashboard" component={Dashboard}/>
                        <Route path="/Invoiceprint" component={Invoiceprint}/>
                        {/* <Route path="/Userprofile" component={Userprofile}/> */}
                        {/* <Route path="/Invoice" component={Invoice}/> */}
                        {/* <Footer /> */}
                    </div>
                );
    }
}
export default App;