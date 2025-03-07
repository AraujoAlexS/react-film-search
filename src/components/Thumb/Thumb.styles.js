import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  trasition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.3s;
  animation: fadeUp 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
