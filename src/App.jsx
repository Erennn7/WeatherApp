import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import Weather from './components/Weather.jsx'
import { Center, Flex } from '@chakra-ui/react'

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {isAuthenticated ? (
          <>
            <h3>Hello {user.name}</h3>
            <button onClick={() => logout()}>Logout</button>
            <Weather />
          </>
        ) : (
          <button
            className="buttonxd"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}
            onClick={() => loginWithRedirect()}
          >
            Login With Redirect
          </button>
        )}
      </header>
    </div>
  );
}

export default App
