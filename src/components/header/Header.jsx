import { useRef } from "react";

import './Header.css'
import { Link, NavLink } from "react-router-dom";
import UserList from "../../pages/UserList";
// import logo from './logo192.png'

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			{/* <img src={logo} className="logo"/> */}
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				
			</button>
			
				<button>
					
					<NavLink to='/userlist'>
					   Sign Up
				     </NavLink>
				</button>
		</header>
	);
}

export default Header;