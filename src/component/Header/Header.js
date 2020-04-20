import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css';
import { useAuth } from '../Login/useAuth';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const auth = useAuth();

	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<a className="navbar-brand" href="/shop">
					Navbar
				</a>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/shop">
							Shop
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/review">
							Order Review
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/inventory">
							Manage Inventory
						</a>
					</li>
				</ul>
				{auth.user && <span style={{ color: 'red' }}> Welcome {auth.user.name} </span>}
				{auth.user ? <a href="/login"> Sign Out </a> : <a href="/login"> Sign In </a>}
			</nav>
		</div>
	);
};

export default Header;
