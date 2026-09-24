import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Chassis design system: fonts, Figma tokens and the resolution layer.
import './design-system/chassis/styles.css'
import './index.css'

import App from './App'

const container = document.getElementById('root')
if (!container) throw new Error('#root not found')

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
