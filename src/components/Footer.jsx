import "../styles/FooterStyle.css";
import {footerItems} from "../data/FooterItems";
import {footerSocial} from "../data/FooterSocial.jsx";

const Footer=()=>{
	return (<div className="footer">
		<div style={{display:"flex", flexDirection:"column"}}>
			<p className="title">Sosyal Medya</p>
			<div className="social">
				{footerSocial.map((item)=>(<a key={item.href} href={item.href} target="_blank">
					<img src={item.icon} alt={item.alt}></img>
				</a>))}
			</div>
		</div>
		<div className="menu">
			{footerItems.map((item)=>(<div key={item.title}>
				<p className="title">{item.title}</p>
				{item.links.map((link)=>(<a key={link.href} href={link.href}>{link.text}</a>))}
			</div>))}
		</div>
	</div>);
};

export default Footer;