import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Login from './components/Login/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <TaskList /> : <Login onLogin={setIsLoggedIn} />}
    </div>
  );
};

export default App;
