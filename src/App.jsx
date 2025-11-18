import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import { Routes, Route } from 'react-router-dom';
import ResultPage from './pages/ResultPage';
import ContextProvider from './Contexts/ContextProvider';

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
