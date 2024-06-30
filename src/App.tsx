import React from 'react';
import './styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Landing } from './components/landing/Landing';

const App: React.FC = () => {
    return (
      <main>
        <Landing />
        <ToastContainer position="bottom-center"/>
      </main>
    );
  };

export default App;
