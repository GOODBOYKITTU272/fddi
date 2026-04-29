import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Plan from './pages/Plan.jsx';
import Practice from './pages/Practice.jsx';
import Stats from './pages/Stats.jsx';
import MockTaker from './pages/MockTaker.jsx';
import Review from './pages/Review.jsx';
import { ProgressProvider } from './state/ProgressContext.jsx';

export default function App() {
  return (
    <ProgressProvider>
      <Routes>
        {/* Mock taker is full-screen — no shell */}
        <Route path="/mock/:id" element={<MockTaker />} />
        {/* Shell routes */}
        <Route element={<AppShell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/review/:id" element={<Review />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ProgressProvider>
  );
}
