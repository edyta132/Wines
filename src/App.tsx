import { Route, Routes } from 'react-router'
import { routes } from './core/routes'
import { useEffect, useState, createContext } from 'react'
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

type AppContextParams = {
  user: null | User
}
export const AppContext = createContext<AppContextParams>({ user: null })

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user)
        // ...
      } else {
        setUser(null)
      }
    });
  }, [])
  return (
    <AppContext.Provider value={{ user }}>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AppContext.Provider>
  )
}

export default App
