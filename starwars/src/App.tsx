import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main.tsx'
import Character from './pages/Character/Character.tsx';
import Error from './pages/Error/Error.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character" element={<Character />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}
