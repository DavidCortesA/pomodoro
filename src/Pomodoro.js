import React, { useState, useEffect } from 'react';

export default function Pomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(true);
    const [displayMessage2, setDisplayMessage2] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = displayMessage2 ? 24 : 4;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                    setDisplayMessage2(!displayMessage2);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className='pomodoro'>
        <div className='meassage'>
            {displayMessage && <div className='message1'>Work while others sleep, Study while others have fun, Persist while others rest... And then you will live what others only dream of.</div>}
            {displayMessage2 && <div className='message2'>Break time! New sessión starts in:</div>}
        </div>
        <div className='timer'>{timerMinutes}:{timerSeconds}</div>
    </div>
  )
}
