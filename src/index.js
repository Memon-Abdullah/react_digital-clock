import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/Header';
import { Time } from './Components/Time';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header/>
    <div className='clock'>  
      <Time/>
    </div>
  </>
);


