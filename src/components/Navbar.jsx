import {Link} from "react-router-dom";
import logo from "../assets/Meram Belediyesi Logo.svg";
import {navbarItems} from "../data/NavbarItems.jsx";
import "../styles/NavbarStyle.css";

const Navbar=()=>{
	// noinspection JSValidateTypes
	return (<nav className="navbar">
		<Link to="/" className="navbarLogo">
			<img src={logo} alt="Meram Belediyesi"/>
		</Link>
		<ul className="navbarItems">
			{navbarItems.map((item, index)=>(<li key={index}>
				<Link className={item.class} to={item.url}>
					{item.title}
				</Link>
			</li>))}
		</ul>
	</nav>);
};

export default Navbar;
