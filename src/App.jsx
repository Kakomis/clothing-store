import React, { lazy, Suspense } from 'react'
import { GlobalStyle } from './global.syles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './containers/Layout'
import { NotFound } from './routes/NotFound'
import { useDispatch } from 'react-redux'
import { checkUserSession } from './store/user/user.actions'
import Spinner from './components/Spinner'

const Home = lazy(() => import('./routes/Home/index'))
const Login = lazy(() => import('./routes/Login'))
const Shop = lazy(() => import('./routes/Shop'))
const Checkout = lazy(() => import('./routes/Checkout'))

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
          <Layout>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/shop/*' element={<Shop />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App