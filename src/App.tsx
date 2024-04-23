
import { Route, Routes } from 'react-router'
import { routes } from './core/routes'

function App() {

  return (
    <>
      <div> global navigation</div>
      <Routes>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Routes>
    </>
  )
}

export default App
