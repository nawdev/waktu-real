// components/Clock.js
import { useEffect, useState } from 'react';
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-time Clock</h1>
      <p>{currentTime}</p>
    </div>
  );
};

export default Clock;

