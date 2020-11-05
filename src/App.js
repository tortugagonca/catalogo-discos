import React from 'react';  
import Header from './components/Header';
import './styles.css';
import Routes from './routes';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes/>
    </div>
  );
}

export default App;
