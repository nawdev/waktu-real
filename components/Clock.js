// components/Clock.js
import { useEffect, useState } from 'react';
import moment from 'moment';

const Clock = () => {
  const [startTime, setStartTime] = useState(moment());
  const [elapsedTime, setElapsedTime] = useState(moment().diff(startTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(moment().diff(startTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formattedElapsedTime = moment.utc(elapsedTime).format('HH:mm:ss');

  return (
    <div>
      <h1>Runtime Clock</h1>
      <p>Waktu Hidup: {formattedElapsedTime}</p>
    </div>
  );
};

export default Clock;
