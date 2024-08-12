import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import UserProfile from './pages/ProfilePage';
import { AuthContext } from './store/auth-context';



function App() {
  
  const authCtx = useContext(AuthContext);

  return (
    
    <Layout>
      <Switch>
        <Route path = '/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path = '/auth'>
          <AuthPage />
        </Route>
        )}
        <Route path = '/profile'>
        {authCtx.isLoggedIn &&   <UserProfile /> }
        {!authCtx.isLoggedIn  && <Redirect to = '/auth' /> }
        </Route>
       
        <Route path = '*'>
           <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
     
  )
}

export default App
