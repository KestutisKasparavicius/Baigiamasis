import { useState } from 'react'
import './App.css'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import Posts from './pages/Posts'

function App() {
  const [route, setRoute] = useState('main')

  return (
    <div style={{ maxWidth: 900, margin: '24px auto', padding: '0 12px' }}>
      <header style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        <button onClick={() => setRoute('main')}>Pagrindinis</button>
        <button onClick={() => setRoute('posts')}>Postai</button>
        <button onClick={() => setRoute('login')}>Prisijungti</button>
        <button onClick={() => setRoute('register')}>Registracija</button>
      </header>

      <main>
        {route === 'main' && <Main />}
        {route === 'posts' && <Posts />}
        {route === 'login' && <Login onSuccess={() => setRoute('main')} />}
        {route === 'register' && <Register onSuccess={() => setRoute('login')} />}
      </main>
    </div>
  )
}

export default App
