import React from 'react';
import 'date-fns';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

import './App.css';

function App() {
  const [time, setTime] = React.useState(null);

  return (
    <div className='App'>
      <h1>Material UI v5 - Pickers</h1>
      <p>Time Picker - Only 0 - 30 minutes</p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label='Basic example'
          value={time}
          onChange={setTime}
          inputProps={{ readOnly: true }}
          renderInput={(params) => <TextField {...params} />}
          shouldDisableTime={(timeValue, clockType) => {
            if (
              clockType === 'minutes' &&
              timeValue !== 0 &&
              timeValue !== 30
            ) {
              return true;
            }

            return false;
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default App;
