import React from "react";
// COMPONENTS
import Thumb from "../Thumb";
// CONFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// NO IMAGE
import NOImage from "../../images/no_image.jpg";
// STYLES
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NOImage
        }
        clickable={false}
        alt="Movie Thumb"
      ></Thumb>
      <Text>
        <h1>{movie.title}</h1>
        <h3>SINOPSE:</h3>
        <p>{movie.overview}</p>

        <div className="ratings-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRETOR{movie.directors.lenght > 1 ? "S" : ""}</h3>
            {movie.directors.map((d) => (
              <p key={d.credit_id}>{d.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
