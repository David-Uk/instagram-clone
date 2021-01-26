import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import CreatePost from './components/CreatePost/CreatePost'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
      <Route path='/create' component={CreatePost} />
    </BrowserRouter>
  );
}

export default App;
