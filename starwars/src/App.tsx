import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.tsx'
import Main from './pages/Main/Main.tsx'
import Character from './pages/Character/Character.tsx';
import Error from './pages/Error/Error.tsx';

function App() {
  return (
    <Router>
      <div className='page'>
        <Header />
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Main />} />
          
          {/* Страница персонажа (пример с динамическим параметром) */}
          <Route path="/character" element={<Character />} />
          
          {/* 404 - если ни один маршрут не совпал */}
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
