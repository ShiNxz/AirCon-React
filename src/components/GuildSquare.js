import { FetchGuild } from './GuildList'
import Button from '@mui/material/Button';

import { useContext } from 'react'
import { Contxt } from '../Context'

import { InviteLink } from '../Config'

export const GuildSquare = () => {
    const Context = useContext(Contxt)

    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center place-items-center">
            {Context.auth.auth.guilds.map(g =>
                <div className="w-64" key={g.id}>
                    <div className="flex w-64 h-32 relative overflow-hidden items-center rounded-lg justify-center">
                        {g.icon !== null && <img className="z-[1] rounded-full w-1/3" src={`https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`} alt={g.id}></img>}
                        <div className="z-[0] blur absolute bg-no-repeat bg-cover inset-0 scale-150 bg-center opacity-50 bg-neutral-900" style={g.icon && {backgroundImage: `url('https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png')`}}></div>
                    </div>
                    <div className="flex align-start mt-4 justify-between items-center">
                        <span className="float-left font-bold text-white text-left">{g.name}</span>
                        {g.inServer ? <Button className="float-right" variant="contained" color="secondary" onClick={() => FetchGuild(g, Context.guild.setGuild, Context)}>Go</Button>
                        : <Button className="float-right" onClick={() => window.open(InviteLink+`&guild_id=${g.id}`, '_blank', 'height=800, width=500')} variant="contained">Invite</Button>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}