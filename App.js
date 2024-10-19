import React from 'react';
import './App.css'; // You may or may not need this depending on whether it's already in LoginPage.js
import LoginPage from './LoginPage'; // Import your login page component

function App() {
  return (
    <div className="App">
      <LoginPage />  {/* Render the LoginPage component */}
    </div>
  );
}

export default App;