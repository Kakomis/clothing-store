import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './containers/Layout'
import { Home } from './routes/Home'
import { NotFound } from './routes/NotFound'
import { Login } from './routes/Login'
import { Shop } from './routes/Shop'
import { Checkout } from './routes/Checkout'
import { useDispatch } from 'react-redux'
import { checkUserSession } from './store/user/user.actions'

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/shop/*' element={<Shop />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App