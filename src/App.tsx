import { Route, Routes } from 'react-router'
import { routes } from './core/routes'

function App() {

  return (
    <>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}

export default App
