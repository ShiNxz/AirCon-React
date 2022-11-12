import { Button } from './Button'
import { useContext } from 'react'
import { Contxt } from '../Context'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login';

export const Auth = () => {
  const Context = useContext(Contxt)

  const SignInClick = () => window.open(`${process.env.API_IP}/auth`, "_self")
  const LogoutClick = () => window.open(`${process.env.API_IP}/auth/logout`, "_self")

  return (
    <Button
      onClick={
        Context.auth.auth.logged ? LogoutClick : SignInClick
      }
      className={
        Context.auth.auth.logged ? 'bg-red-500 h-8 mx-2' : 'bg-green-500 h-8 mx-2'
      }
    >
      {Context.auth.auth.logged ? <div className='inline-flex'><span className='hidden md:block mx-2'>Logout</span><LogoutIcon fontSize="small"/></div> : <>Login <LoginIcon fontSize="small"/></>}
    </Button>
  )
}