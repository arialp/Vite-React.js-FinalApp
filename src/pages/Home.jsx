/* eslint-disable react/no-unescaped-entities */
import "../styles/HomeStyle.css";
import {HomeItems} from "../data/HomeItems.jsx";
import {useRef} from "react";

export default function Home(){
	const nextDiv=useRef(null);
	const scrollToNextDiv=()=>{
		nextDiv.current.scrollIntoView({behavior:"smooth"});
	}
	return (<>
		<div className="home">
			<img src="https://www.meram.bel.tr/upload/medya/MRM_2455.jpg" alt="Meram Belediyesi"/>
			<div className="homeText">
				<h1>Konya'nın Kalbi Meram</h1>
				<p>Keşfetmeye Hazır Mısın?</p>
				<button onClick={scrollToNextDiv}>Keşfet!</button>
			</div>
		</div>
			<div className="homeCards" ref={nextDiv}>
				<h1>Meram Galerisi</h1>
				{HomeItems.map((card, index)=>(<div key={index} className={card.class}>
					<div className="cardText">
						<h2>{card.title}</h2>
						<p>{card.text}</p>
					</div>
					<div className="cardImage">
						<img src={card.img1} alt={card.title+"1"}/>
						<img src={card.img2} alt={card.title+"2"}/>
					</div>
				</div>))}
			</div>
	</>);
}