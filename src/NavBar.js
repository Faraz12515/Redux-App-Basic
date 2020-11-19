import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div>
			<nav>
				<div class='nav-wrapper'>
					<Link to='/' class='brand-logo'>
						Redux App
					</Link>
					<ul id='nav-mobile' class='right hide-on-med-and-down'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
