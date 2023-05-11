import { useState, useContext, useRef } from "react";
import * as S from "../styles/Timer.styles";
import { IsNightContext } from "../context/IsNightcontext";
import Reset from "../styles/Reset";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let intervalRef = useRef(null);
  const { isNight } = useContext(IsNightContext);
  const [isRunning, setIsRunning] = useState(false);

  const startTimerOnClick = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 59) {
          setMinutes((minutes) => minutes + 1);
          return 0;
        } else return seconds + 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setMinutes(0);
    setIsRunning(false);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <>
      <Reset isnight={isNight} />
      <S.Container>
        <S.TimeWrapper>
          <S.Time isnight={isNight}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </S.Time>
          <S.ChangeTimerButtonsWrapper>
            {isRunning ? null : (
              <S.StartButton onClick={() => startTimerOnClick()}>
                START
              </S.StartButton>
            )}
            <S.ResetButton onClick={() => resetTimer()}>RESET</S.ResetButton>
            <S.StopButton onClick={() => stopTimer()}>STOP</S.StopButton>
          </S.ChangeTimerButtonsWrapper>
        </S.TimeWrapper>

        <S.ButtonsWrapper>
          <S.Button to="/" isnight={isNight}>
            CLOCK
          </S.Button>
          <S.Button to="/countdown" isnight={isNight}>
            COUNTDOWN
          </S.Button>
        </S.ButtonsWrapper>
      </S.Container>
    </>
  );
};

export default Timer;
