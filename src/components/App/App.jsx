import React, { useState } from 'react';
import classes from './style.module.css';

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
].reduce((acc, day, index) => ({ ...acc, [day]: 2 ** index }), {});

const App = () => {
  const [days, setDays] = useState(0);
  const dayEntries = Object.entries(DAYS);

  const toggleDay = (day) => () => {
    setDays((days) => days ^ day);
  };

  const isDaySelected = (day) => Boolean(days & day);

  return (
    <div className={classes.app}>
      <h1>Days of the week</h1>

      <div>
        <div>
          {dayEntries.map(([day, value]) => (
            <label key={day} className={classes.label}>
              <input
                type="checkbox"
                checked={isDaySelected(value)}
                onChange={toggleDay(value)}
              />
              {day}
            </label>
          ))}
        </div>

        <h2>Selected days flag: {days}</h2>

        <h2>
          Selected days:{' '}
          {dayEntries
            .filter(([, day]) => isDaySelected(day))
            .map(([day]) => day)
            .join(', ') || 'None'}
        </h2>
      </div>
    </div>
  );
};

export default App;
