import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
	background-color: #333;
	color: #fff;
	padding: 20px 0;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 30px;
	text-shadow: -3px 3px #bebebe;
	margin: 0px 2em;
	font-family: "Oxygen";
`;

const Nav = styled.nav`
	margin: 0px 3em;
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 3em;

		li {
			font-family: Geneva, Tahoma, sans-serif;
			a {
				text-decoration: none;
				color: #fff;
				font-weight: bold;

				&:hover {
					text-decoration: underline;
					color: #5a9799;
				}
			}
		}
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Title>Seu Título</Title>
			<Nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Sobre</a>
					</li>
					<li>
						<a href="/">Contato</a>
					</li>
					<li>
						<a href="/">Blog</a>
					</li>
					<li>
						<a href="/">FAQ</a>
					</li>
				</ul>
			</Nav>
		</HeaderContainer>
	);
};

export default Header;
