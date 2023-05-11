import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 3rem 20rem;
  border-radius: 1rem;

  @media (max-width: 730px) {
    width: 90vw;
    padding: 1rem;
  }
`;

export const Time = styled.h2`
  width: 30rem;
  text-align: center;

  font-size: 6rem;
  color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};
  font-weight: bold;
  font-family: "Orbitron", sans-serif;
  transition: color 250ms;
`;

export const TimeImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  margin: 8rem 0;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 730px) {
    width: 30rem;
  }
`;

export const Button = styled(Link)`
  background-color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};
  padding: 1rem 2rem;

  border: 3px solid ${(props) => (props.isnight ? "#00243d" : "#E25822")};
  border-radius: 0.5rem;

  font-size: 2rem;
  color: white;
  text-decoration: none;

  cursor: pointer;
  transition: background-color 250ms, color 250ms, border 250ms;

  &:hover {
    background-color: white;
    color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};
    border: 3px solid ${(props) => (props.isnight ? "#00243d" : "#E25822")};
  }
`;
