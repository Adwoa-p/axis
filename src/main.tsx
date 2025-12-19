import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SignUpLearner } from './components/auth/learner/signup/index.ts'
import { SignUpInstructor } from './components/auth/instructor/signup/index.ts'
import { LogInLearner } from './components/auth/learner/signin/login.tsx';
import { LogInInstructor } from './components/auth/instructor/signin/login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup/learner" element={<SignUpLearner />} />
        <Route path="/signup/instructor" element={<SignUpInstructor />} />
        <Route path="/login/learner" element={<LogInLearner />} />
        <Route path="/login/instructor" element={<LogInInstructor />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
