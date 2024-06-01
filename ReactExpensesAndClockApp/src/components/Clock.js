import React , {useEffect, useState} from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function TimeClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    console.log(value)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
}

export default TimeClock;