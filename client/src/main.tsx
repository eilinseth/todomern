import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import webFontLoader from "webfontloader"

webFontLoader.load({
  google:{
    families:['Poppins:500,700:Latin']
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
