import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0.12) 41%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${(props) => props.image});
  background-size: 100% cover;
  background-position: center;
  height: 600px;
  position: realtive;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--max-width);
  margin: 0 auto;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    padding: 0px; 
  }
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  margin-left: 90px;
  bottom: 110px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    margin: 0px;
    padding: 20px;
    max-width: 100%;
    bottom: 40px;
  }
`;
