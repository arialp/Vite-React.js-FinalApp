import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

export default function App(){
	return (<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/services" element={<Services/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
			<Footer/>
		</>);
}
