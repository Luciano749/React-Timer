import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  width: 70rem;
  height: 57rem;
  background-color: #fff;

  padding: 3rem 20rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 730px) {
    width: 90vw;
    padding: 1rem;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const ChangeTimerButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StartButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0.5rem;
  margin: 2rem 0;
  font-size: 1.8rem;
  color: #058830;
  cursor: pointer;
  position: relative;
  z-index: 99;

  &::before {
    content: "";
    width: 0;
    height: 0;
    background-color: #0588313e;

    border-radius: 0.5rem;

    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: width 250ms, height 250ms;
    z-index: 1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
`;
export const ResetButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0.5rem;

  margin: 2rem 0;

  font-size: 1.8rem;
  color: #c5a801;
  cursor: pointer;
  position: relative;
  z-index: 99;

  &::before {
    content: "";
    width: 0;
    height: 0;
    background-color: #c5a8013e;

    border-radius: 0.5rem;

    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: width 250ms, height 250ms;
    z-index: 1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
`;

export const StopButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0.5rem;

  margin: 2rem 0;

  font-size: 1.8rem;
  color: #c00000;
  cursor: pointer;
  position: relative;
  z-index: 99;

  &::before {
    content: "";
    width: 0;
    height: 0;
    background-color: #c000003e;

    border-radius: 0.5rem;

    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: width 250ms, height 250ms;
    z-index: 1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
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
