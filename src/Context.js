import { createContext, useState, useEffect } from 'react'

export const Contxt = createContext()

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ logged: false })
  const [selectedGuild, setGuild] = useState(false)
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    loading && setProgress(30)
    !loading && setProgress(100)
  }, [loading])

  useEffect(() => {
    msg && setOpen(true)
  }, [msg])
  
  return (
    <Contxt.Provider
      value={{
        auth: { auth, setAuth },
        guild: { selectedGuild, setGuild },
        msg: {
          mode: { open, setOpen },
          msg: { msg, setMsg }
        },
        loading: { loading, setLoading },
        progress: { progress, setProgress}
      }}
    >
      {children}
    </Contxt.Provider>
  )
}