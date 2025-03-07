import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <a href="https://www.themoviedb.org/?language=pt-BR">
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </a>
    </Content>
  </Wrapper>
);

export default Header;
