import { useState, useContext } from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css";
// Components
import Nav from "./components/Nav";
// pages
import Login from "./pages/Login";
import PokemonList from "./pages/PokemonList";
import Home from "./pages/Home";
// contexts
import UserContext from "./contexts/UserContext";

const App = () => {
  // In able for us to use our context, we import first then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  // We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')

  return (
    <div className="App">
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider */}
      <UserContext.Provider value={user}>
        <Nav />
        {/* We need to wrap our all of our routes inside react router Routes component */}
        <Routes>
          <Route path='/' element={<Home setUser={setUser} />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='pokemon/list' element={<PokemonList setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
