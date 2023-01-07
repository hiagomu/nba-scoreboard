import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Events from './components/pages/Events'

function App() {

  return (
    <Router>
      <Routes> 
        <Route path='/'  element={<Events />}/>
      </Routes>
    </Router>
  )
}

export default App