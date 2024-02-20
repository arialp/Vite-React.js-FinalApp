import {useRef, useState} from "react";
import "../styles/ContactStyle.css";

export default function Contact(){
	const nextDiv=useRef(null);
	const scrollToNextDiv=()=>{
		nextDiv.current.scrollIntoView({behavior:"smooth"});
	};
	const [name, setName]=useState("");
	const [email, setEmail]=useState("");
	const [message, setMessage]=useState("");

	const handleSubmit=(event)=>{
		event.preventDefault();
		console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
		alert("İleti Gönderildi!");
	};

	return (<>
		<div className="home">
			<img src="https://www.meram.bel.tr/upload/medya/MRM_9415.jpg" alt=""/>
			<div className="homeText">
				<h1>İletişim</h1>
				<p>Meram Belediyesi ile iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>
				<button onClick={scrollToNextDiv}>İletişim Formu</button>
			</div>
		</div>
		<div className="form" ref={nextDiv}>
			<h2>İletişim Formu</h2>
			<form onSubmit={handleSubmit}>
				<div className="name-email">
					<label>
						* İsminiz:
						<input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
					</label>
					<label>
						E-posta Adresiniz:
						<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					</label>
				</div>
				<label>
					* Mesajınız:
					<textarea value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
				</label>
				<button type="submit">Gönder</button>
				<p>* ile işaretlenen yerler zorunlu alanlardır.</p>
			</form>
		</div>
	</>);
}
