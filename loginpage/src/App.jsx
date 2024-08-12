
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import UserProfile from './pages/ProfilePage';



function App() {
 

  return (
    
    <Layout>
      <Switch>
        <Route path = '/' exact>
          <HomePage />
        </Route>
        <Route path = '/auth'>
          <AuthPage />
        </Route>
        <Route path = '/profile'>
          <UserProfile />
        </Route>
        <Route path = '*'>
           <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
     
  )
}

export default App
