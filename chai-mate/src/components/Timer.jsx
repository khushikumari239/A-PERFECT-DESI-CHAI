import React, { useState, useEffect } from 'react';

const Timer = ({ seconds }) => {
  const [time, setTime] = useState(seconds);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer;
    if (active && time > 0) {
      timer = setInterval(() => setTime(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [active, time]);

  const reset = () => {
    setTime(seconds);
    setActive(false);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">{time}s</h1>
      <div className="mt-2">
        <button onClick={() => setActive(true)} className="btn">Start</button>
        <button onClick={() => setActive(false)} className="btn">Pause</button>
        <button onClick={reset} className="btn">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
