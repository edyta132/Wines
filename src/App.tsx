import { Route, Routes } from 'react-router'
import { routes } from './core/routes'
import { useEffect, useState, createContext, useId } from 'react'
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import { db } from './core/services/firebase';
import { UserData, WineListItemType } from './pages/ListOfWine/types';
import { WineDescription } from './pages/WineDescription/WineDescription';

type AppContextParams = {
  user: null | User,
  wines: WineListItemType[],
  userData: UserData,
  modifyUserDataFavourites: (arg: number) => void,
  modifyUserDataSaved: (arg: number) => void
}

const initialUserData: UserData = { favourites: [], saved: [] }

export const AppContext = createContext<AppContextParams>({ user: null, wines: [], userData: initialUserData, modifyUserDataFavourites: () => { }, modifyUserDataSaved: () => { } })


function App() {
  const [user, setUser] = useState<User | null>(null)
  const [wines, setWines] = useState<WineListItemType[]>([])
  const [userData, setUserData] = useState<UserData>(initialUserData)

  console.log(userData)

  const modifyUserDataFavourites = (id: number) => {
    if (!userData || !user) {
      return
    }
    const usersDataCollectionRef = doc(db, "users-data", user.uid)

    if (userData.favourites.includes(id)) {
      const removeEl = userData.favourites.filter(el => {
        return el !== id
      });
      const newRemovedUserData = { ...userData, favourites: removeEl }
      setUserData(newRemovedUserData)
      setDoc(usersDataCollectionRef, newRemovedUserData)
    } else {
      const newUserData: UserData = { ...userData, favourites: [...userData!.favourites, id] }
      setUserData(newUserData)
      setDoc(usersDataCollectionRef, newUserData)
    }
  }

  const modifyUserDataSaved = (id: number) => {
    if (!userData || !user) {
      return
    }

    const usersDataCollectionRef = doc(db, "users-data", user.uid)

    if (userData.saved.includes(id)) {
      const removeEl = userData.saved.filter(el => {
        return el !== id
      });
      const newRemovedUserData = { ...userData, saved: removeEl }
      setUserData(newRemovedUserData)
      setDoc(usersDataCollectionRef, newRemovedUserData)
    } else {
      const newUserData: UserData = { ...userData, saved: [...userData.saved, id] }
      setUserData(newUserData)
      setDoc(usersDataCollectionRef, newUserData)
    }
  }



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

    const getUserData = async (uid: string) => {
      const usersDataCollectionRef = doc(db, "users-data", uid)
      try {
        const data = (await getDoc(usersDataCollectionRef)).data() as UserData
        if (data) {
          setUserData(data)
        }
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
        getUserData(uid)
      } else {
        setUser(null)
      }
    });
  }, [])
  return (
    <AppContext.Provider value={{ user, wines, userData, modifyUserDataFavourites, modifyUserDataSaved }}>
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
