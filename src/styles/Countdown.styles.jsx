import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  width: 70rem;
  height: 57rem;
  background-color: #fff;

  padding: 3rem 20rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 730px) {
    width: 90vw;
    padding: 1rem;
  }
`;

export const Time = styled.h2`
  width: 30rem;
  text-align: center;

  font-size: 8.5rem;
  color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};
  font-weight: bold;
  font-family: "Orbitron", sans-serif;
  transition: color 250ms;
`;

export const IncreaseTimeWrapper = styled.div`
  margin: 8rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IncreaseTimeText = styled.h2`
  background-color: #05883140;

  padding: 0.3rem;
  border: 2px solid #05883196;
  border-radius: 0.5rem;

  font-size: 3rem;
  font-weight: bold;
  color: #058830;
  transition: background-color 100ms, color 100ms;

  &:active {
    background-color: #05883196;
    color: white;
    border: 2px solid #05883196;
  }
`;

export const ChangeTimeButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid;
  border-color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};

  font-size: 2.5rem;
  font-weight: bold;
  color: white;

  transition: background-color 300ms;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${(props) => (props.isnight ? "#00243d" : "#E25822")};
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
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
