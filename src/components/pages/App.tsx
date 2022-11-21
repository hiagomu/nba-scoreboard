import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Events from './Events'
import Match from './Match'

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/'  element={<Events />}/>
        <Route path='/match/:id' element={<Match />}/>
      </Routes>
    </Router>
  )
}

export default App