import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import { UserDetails } from './components/User/UserDetails';

function App() {
  return (
    <div className="App">
     <UserDetails/>
    </div>
  );
}

export default App;
