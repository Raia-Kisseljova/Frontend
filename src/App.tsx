import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddAnimal from './components/pages/AddAnimal';
import AnimalProfile from './components/pages/AnimalProfile';
import Home from './components/pages/Home';
import Login from './components/pages/LogIn';
import Search from './components/pages/Search';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile';
import UserSettings from './components/pages/UserSettings';
import NavBar from './components/shared/Navbar/NavBar';

function App() {
  // console.log('user is', user)
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/users/:username" component={UserProfile} />
        <Route path="/settings" component={UserSettings} />
        <Route path="/add-animal" component={AddAnimal} />
        <Route path="/search" component={Search} />
        <Route path="/animals/:slug" component={AnimalProfile} />
      </Switch>
    </>
  )
}

export default App;

// Context Provider Consumer useContext
// useReducer 

// <Provider value={'light'}>
//   <Tree />
// </Provider>

/// const theme = useContext(ThemeContext) 'light'

// UserInfo
// const user = useContext(UserContext);

// /api
//   /auth
//   /users
//   /animals

// /components
//  /public pages
//  /user pages
//     /user-profile
//  /animal pages

// useCustomHOok() <- 500 lines of ugly code

// /hooks
//  /auth
//    useLogin
//    useLogout
//  /users
//    useUserUpdate
//    useCustomHook
//   /animals
//     useAnimalsSearch

// /styles
//  /global.css
//  /utils.module.css

// /auth
//  /socket-routes
//  /routes
//  /models

// /users
//  /api
//  /components
//  /hooks

// /animals
//   /api.
//   /components
//   /hooks

// pages
// ComplexPage
  // ComplexPage.tsx
  // components/
  // state/
  // api/
  // cache/

// hooks