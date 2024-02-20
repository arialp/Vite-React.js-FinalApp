import "../styles/ServicesStyle.css";
import {useRef} from "react";
import {ServicesItems} from "../data/ServicesItems.jsx";

export default function Services(){
	const nextDiv=useRef(null);
	const scrollToNextDiv=()=>{
		nextDiv.current.scrollIntoView({behavior:"smooth"});
	};
	return (<>
		<div className="home">
			<img src="https://www.meram.bel.tr/upload/medya/MRM_8037.jpg" alt=""/>
			<div className="homeText">
				<h1>Hizmetlerimiz</h1>
				<p>Meram Belediyesi olarak sizlere sunduğumuz hizmetlerimizden bazıları.</p>
				<button onClick={scrollToNextDiv}>Hizmetlerimiz</button>
			</div>
		</div>
		<div className="services" ref={nextDiv}>
			<h1>Keşfetmeniz Gereken Yerler</h1>
			<div className="servicesCard">
				{ServicesItems.map((card, index)=>(<div key={index} className="serviceCard">
					<div className="serviceImage">
						<img src={card.image} alt={card.title}/>
					</div>
					<div className="serviceTitle">
						<h4>{card.title}</h4>
					</div>
					<div className="serviceText">
						<p>{card.text}</p>
					</div>
				</div>))}
			</div>
		</div>
	</>);
}