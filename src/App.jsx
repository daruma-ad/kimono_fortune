import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SetupView from './views/SetupView';
import HomeView from './views/HomeView';
import ResultView from './views/ResultView';

function ProtectedRoute({ children }) {
  const birthday = localStorage.getItem('wasai_birthday');
  if (!birthday) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function RootRedirect() {
  const birthday = localStorage.getItem('wasai_birthday');
  if (birthday) {
    return <Navigate to="/home" replace />;
  }
  return <SetupView />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/result/:itemId"
          element={
            <ProtectedRoute>
              <ResultView />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
