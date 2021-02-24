import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>(
	<div>
		<ul>
			<div>
				<Link to="/home">Home</Link>
			</div>
			<div>
				<Link to="/space">Space</Link>
			</div>
			<div>
				<Link to="/podcast">Podcast</Link>
			</div>
			<div>
				<Link to="/signup" >Sign Up</Link>
			</div>
			<div>
				<Link to="/login">Login</Link>
			</div>
		</ul>
	</div>
	)

export default Navbar;