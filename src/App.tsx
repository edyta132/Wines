import { Route, Routes } from 'react-router'
import { routes } from './core/routes'
import { useEffect, useState, createContext } from 'react'
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './core/services/firebase';
import { WineListItemType } from './pages/ListOfWine/types';
import { WineDescription } from './pages/WineDescription/WineDescription';

type AppContextParams = {
  user: null | User,
  wines: WineListItemType[]
}
export const AppContext = createContext<AppContextParams>({ user: null, wines: [] })

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [wines, setWines] = useState<WineListItemType[]>([])


  useEffect(() => {
    const getWinesList = async () => {
      const winesCollectionRef = collection(db, "wines")
      try {
        const data = await getDocs(winesCollectionRef);
        const filteredData = data.docs.map<WineListItemType>((doc) => ({ ...doc.data(), docId: doc.id } as WineListItemType))
        setWines(filteredData)
      } catch (err) {
        console.log(err)
      }
    }


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user)
        // ...

        getWinesList()
      } else {
        setUser(null)
      }
    });
  }, [])
  return (
    <AppContext.Provider value={{ user, wines }}>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
        <Route path="/wine-description/:id" element={<WineDescription />}></Route>

      </Routes>
    </AppContext.Provider>
  )
}

export default App
