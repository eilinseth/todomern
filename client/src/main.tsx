import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import webFontLoader from "webfontloader"
import { QueryClient , QueryClientProvider } from 'react-query'

webFontLoader.load({
  google:{
    families:['Poppins:500,700:Latin']
  }
})

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
