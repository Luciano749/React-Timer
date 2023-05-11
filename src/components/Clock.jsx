import { useState, useEffect, useContext } from "react";
import * as S from "../styles/Clock.styles";
import { IsNightContext } from "../context/IsNightcontext";
import Reset from "../styles/Reset";

const Clock = () => {
  let date = new Date();
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());
  const { isNight, setIsNight } = useContext(IsNightContext);

  setTimeout(() => {
    date = new Date();

    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  }, 1000);

  useEffect(() => {
    hours >= 18 ? setIsNight(true) : setIsNight(false);
  }, [hours, setIsNight]);

  return (
    <>
      <Reset isnight={isNight} />
      <S.Container>
        <S.Time isnight={isNight}>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </S.Time>
        <S.TimeImage
          src={
            isNight
              ? "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              : "https://images.unsplash.com/photo-1588746853740-bd35aad10bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          alt="time"
          isnight={isNight}
        />
        <S.ButtonsWrapper>
          <S.Button to="/timer" isnight={isNight}>
            TIMER
          </S.Button>
          <S.Button to="/countdown" isnight={isNight}>
            COUNTDOWN
          </S.Button>
        </S.ButtonsWrapper>
      </S.Container>
    </>
  );
};

export default Clock;
