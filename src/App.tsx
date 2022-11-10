import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Events from './components/pages/Events'

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