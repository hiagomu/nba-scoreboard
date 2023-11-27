import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Events } from './Events'
import Match from './Match'
import { QueryClient, QueryClientProvider } from 'react-query'
import Dropdown from '../blocks/Dropdown'

function App() {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <Dropdown />
      <Router>
        <Routes> 
          <Route path='/'  element={<Events />}/>
          <Route path='/match/:id' element={<Match />}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App