/* eslint-disable no-unused-vars */


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { DashViewProvider } from './contexts/DashView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DashViewProvider>
    <App />
  </DashViewProvider>
)
