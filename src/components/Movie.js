import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// COMPONENTS
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor'
// HOOKS
import { useMovieFetch } from "../hooks/useMovieFetch";
// IMAGES
import NoImage from "../images/no_image.jpg";
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
 
  if (loading) return <Spinner />;
  if (error) return <div>Algo deu errado</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header='Actors'>
        {movie.actors.map((actor) => 
          (
          <Actor 
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={actor.profile_path 
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` 
              : NoImage} 
           />
          )
        )}
      </Grid>
    </>
  );
};

export default Movie;
