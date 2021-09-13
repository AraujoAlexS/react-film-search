import React, { useState, useEffect } from "react";
//API
import API from "../API";
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// COMPONENTS
import HeroImage from "./HeroImage";
// HOOK
import { useHomeFetch } from "../hooks/useHomeFetch";
// IMG
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    <div>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </div>
  );
};

export default Home;
