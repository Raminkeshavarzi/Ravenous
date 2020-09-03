import React from 'react';
import '../SearchBar/Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="FooterContainer">
					<h2>Built By Ramin Keshavarzi</h2>
					<ul className="FooterTabs">
						<a className="FooterLink" href="https://github.com/Raminkeshavarzi">
							My GitHub
						</a>
						<a className="FooterLink" href="https://www.linkedin.com/in/keshavarziramin1996/">
							Linkedln
						</a>
					</ul>
				</div>
			</footer>
		);
	}
}

export default Footer;
