import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark)

const rootElement = document.documentElement

if (isDark) {
  rootElement.classList.add('dark')
} else {
  rootElement.classList.remove('dark')
}
const root = document.documentElement
root.removeAttribute('data-theme-initializing')

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
