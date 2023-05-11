import * as S from "../styles/Countdown.styles";
import { useContext } from "react";
import { IsNightContext } from "../context/IsNightcontext";
import Reset from "../styles/Reset";
import { useState, useRef } from "react";
import { useEffect } from "react";

const Countdown = () => {
  const { isNight } = useContext(IsNightContext);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const increaseMinutes = () => {
    setMinutes(minutes + 1);
  };

  const decreaseMinutes = () => {
    if (minutes > 0) setMinutes(minutes - 1);
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      setIsActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  return (
    <>
      <Reset isnight={isNight} />
      <S.Container>
        <div>
          <S.Time isnight={isNight}>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </S.Time>

          <S.IncreaseTimeWrapper>
            <S.ChangeTimeButton isnight={isNight} onClick={decreaseMinutes}>
              -
            </S.ChangeTimeButton>
            <S.IncreaseTimeText isnight={isNight} onClick={handleStart}>
              START
            </S.IncreaseTimeText>
            <S.ChangeTimeButton isnight={isNight} onClick={increaseMinutes}>
              +
            </S.ChangeTimeButton>
          </S.IncreaseTimeWrapper>
        </div>

        <S.ButtonsWrapper>
          <S.Button to="/" isnight={isNight}>
            CLOCK
          </S.Button>
          <S.Button to="/timer" isnight={isNight}>
            TIMER
          </S.Button>
        </S.ButtonsWrapper>
      </S.Container>
    </>
  );
};

export default Countdown;
