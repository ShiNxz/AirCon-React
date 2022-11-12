import './App.css'
import { UI } from './components/UI'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Contxt } from './Context'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useAxios from './lib/useAxios'

// Pages
import Index from './pages/index'
import Support from './pages/support'

AOS.init()

const App = () => {
  const Context = useContext(Contxt)
  useEffect(() => {
    Context.loading.setLoading(true)
    const FetchData = async () => {
      const { data: response, success, error } = await useAxios(`auth/success`, `GET`)

      if(success)
        Context.auth.setAuth({
          logged: true,
          user: response.user,
          supporter: response.supporter,
          guilds: response.guilds
        })
      else
        Context.auth.setAuth({
          logged: false,
          error,
        })

      Context.loading.setLoading(false)
    }
    FetchData()
  }, [])

  return (
    <Router>
      <UI>
        <Navbar/>

          <Routes >

            <Route path={`/support`} name="Support" element={<Support/>}/>
            <Route path="/" element={<Index/>} />
            <Route path="*" element={<Navigate to={`/`}/>} />

          </Routes>

        <Footer/>
      </UI>
    </Router>
  )
}

export default App