import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Events from './components/Events'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes> 
          <Route path='/'  element={<Events />}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
