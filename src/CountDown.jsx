import React, { useState,useEffect } from 'react'

const CountDown = () => {
  let [date,SetDate]=useState();
  const [time, setTime] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {

      const now = new Date();
      let year = now.getFullYear();

      let targetDate = new Date(year, 6, 20); // March 20

      if (now > targetDate) {
        targetDate = new Date(year + 1, 2, 20);
      }

      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });

    }, 1000);

    // return () => clearInterval(interval); 

  }, []);

  return (
  <>
    <h2 id='countdownHeading'>Countdown to Her Birthday 🎀</h2>
    <div id='countDownContainer'>
      <div className="timeBox">
        <span className="number">{time.days}</span>
        <span className="label">Days</span>
      </div>

      <div className="timeBox">
        <span className="number">{time.hours}</span>
        <span className="label">Hours</span>
      </div>

      <div className="timeBox">
        <span className="number">{time.minutes}</span>
        <span className="label">Minutes</span>
      </div>

      <div className="timeBox">
        <span className="number">{time.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>  
  </>
  )
}
export default CountDown;
