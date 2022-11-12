/* eslint-disable jsx-a11y/anchor-is-valid */
import Avatar from '@mui/material/Avatar'
import { Auth } from './Auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Contxt } from '../Context'
import { Button } from './Button'
import logo from '../assets/logo.png'

export const Navbar = () => {
	let navigate = useNavigate()
  const Context = useContext(Contxt)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-second border-secondary border-b-[1px] p-2 pl-2 pr-2 fixed w-screen z-10">
      <div className="flex items-center flex-shrink-0 text-slate-50 mr-6">
        <span className="font-semibold text-xl tracking-tight hidden md:block"><img src={logo} alt="" className='cursor-pointer h-12' onClick={() => navigate("/")}/></span>
      </div>
      <div className="flex-grow flex items-center w-auto">
          <div className="text-sm flex-grow">
          </div>
          <div className="flex items-center mx-5">
            {Context.auth.auth.logged &&
              <>
                {Context.auth.auth.supporter &&  <Button onClick={() =>navigate("/support")} className={'h-8 mx-2'}>Support</Button>}
                <Avatar
                  className="mx-2 border-2 border-neutral-600"
                  src={`https://cdn.discordapp.com/avatars/${Context.auth.auth.user.client.id}/${Context.auth.auth.user.client.avatar}.png?size=300`}
                />
                <div className="flex-col items-start text-md text-slate-50 hidden sm:flex">
                  <span className="text-md font-semibold">{Context.auth.auth.user.client.username}#{Context.auth.auth.user.client.discriminator}</span>
                  <span className="text-xs text-slate-200">{Context.auth.auth.guilds.length} Guilds</span>
                </div>
              </>
            }
          </div>
          <Auth />
      </div>
    </nav>
  )
}