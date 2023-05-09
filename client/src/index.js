import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import ThemeProvider from './providers/ThemeProvider'
import Root from './components/Root/Root'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <Root />
      </ThemeProvider>
  </React.StrictMode>
);
