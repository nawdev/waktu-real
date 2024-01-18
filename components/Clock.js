// components/Clock.js
import { useEffect, useState } from 'react';
import moment from 'moment';

const Clock = () => {
  const [startTime, setStartTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setStartTime((prevStartTime) => moment(prevStartTime)); // Membuat salinan waktu awal
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const elapsedTime = moment().diff(startTime);
  const formattedElapsedTime = moment.utc(elapsedTime).format('HH:mm:ss');

  return (
    <div>
      <h1>Runtime Clock</h1>
      <p>Waktu Hidup: {formattedElapsedTime}</p>
    </div>
  );
};

export default Clock;
