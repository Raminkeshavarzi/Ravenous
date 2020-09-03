import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="FooterContainer">
					<h1> Built By RK </h1>
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
