import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';
import { useState, useEffect } from 'react';
import { authContext } from './auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogsView from './components/BlogsView';

function App() {
  const [userEmailId, setEmailId] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const getUserEmailId = () => {
    let data = localStorage.getItem('userEmailId');
    setEmailId(data);
  }

  const getAuthToken = () => {
    let data = localStorage.getItem('authToken');
    setAuthToken(data);
  }

  const getuserId = () => {
    let data = localStorage.getItem('userId');
    setUserId(data);
  }

  useEffect(() => {
    getUserEmailId();
    getAuthToken();
    getuserId();
  }, [])
  


  return (
    <div className="App">
      <authContext.Provider
      value={{
        authToken,
        userEmailId,
        userId,
        setAuthToken,
        setEmailId,
        setUserId
      }}
      >
         <Header/>
         <Router>
            <Routes>
              <Route exact path='/' element={<LoginRegister/>}/>
              <Route exact path='/blogs' element={<BlogsView/>}/>
            </Routes>
         </Router>
      <LoginRegister/>
      </authContext.Provider>
        
     
    </div>
  );
}

export default App;
