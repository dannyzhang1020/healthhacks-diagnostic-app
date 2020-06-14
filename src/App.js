import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import 'react-accessible-accordion/dist/fancy-example.css';

function App() {
  return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '200px'}}>
          <h1>Quick COVID-19 Diagnosis</h1>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px'}}>
          <p>
            This easy-to-use tool can direct your next steps in the potential case of COVID-19.
          </p>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50px'}}>
          <Button variant="contained" color="primary">Start Screening</Button>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '200px'}}>
          <h2>Resources</h2>
        </div>
      </div>
  );
}

export default App;
