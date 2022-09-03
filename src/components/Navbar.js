import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
    const amount = useSelector(state => state.amount);
    return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="#">BankApp</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        </ul>
    </div>
        <button disabled={true} className="btn-primary">Your Balance: {amount}</button>
    </nav>
        </div>
    )
}

export default Navbar