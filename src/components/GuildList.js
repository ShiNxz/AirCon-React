import Tooltip from '@mui/material/Tooltip'
import HomeIcon from '@mui/icons-material/Home'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useContext } from 'react'
import { Contxt } from '../Context'
import useAxios from '../lib/useAxios'
import { ax } from '../Config'

const GuildGrid = ({ children }) => {
    return (
        <div className="bg-second border-secondary border-r-[1px] w-16 text-center overflow-auto float-left h-screen py-14 hidden sm:inline-block">
            <ul className="flex flex-col items-center">{ children }</ul>
        </div>
    )
}

export const FetchGuild = async (guildId, setGuild, Context) => {
    Context.loading.setLoading(true)

    const { data } = await useAxios(`${ax.endPoint}/state`, `POST`, {
        guildId: guildId.id,
        userId: Context.auth.auth.user.client.id
    })
    if(data.inServer) {
        setGuild({
            guild: guildId,
            inServer: true,
            connection: data.connection,
            userConnection: data.userConnection,
            status: typeof data?.connection !== 'undefined' ? 'on' : 'off',
            userState: !data.userConnection ? false : (data.connection ? data.connection.id === data.userConnection.id ? true : false : true),
            state: data.state,
            logs: data.logs
        })
        Context.msg.msg.setMsg(!data.userConnection ? 'Please connect to this server in order to use the bot!' : (data.connection && data.connection.id !== data.userConnection.id && 'Please connect to the bot room in order to use the bot!'))
    }
    else
        return setGuild({
            guild: guildId,
            inServer: false,
        })

    Context.loading.setLoading(false)
}

export const GuildList = () => {
    const Context = useContext(Contxt)

    return (
        <GuildGrid>
            <List>
                <Tooltip key="Home" title="Home" placement="right" arrow>
                    <ListItem key="Home">
                        <div className={`bg-neutral-700 flex justify-center content-center flex-wrap items-center w-12 h-12 m-1 bg-no-repeat bg-cover cursor-pointer border-solid border-2 duration-300 ${!Context.guild.selectedGuild && 'border-blue-500'} rounded-full shadow-lg hover:shadow-xl hover:border-neutral-300`} onClick={() => Context.guild.setGuild(false)}> <HomeIcon fontSize="medium" sx={{ color: '#fff' }} /> </div>
                    </ListItem>
                </Tooltip>
                <Divider variant="middle" className="!mb-1" />
                {Context.auth.auth.guilds.map((g) => (
                    <Tooltip key={g.id} title={g.name} placement="right" arrow>
                        <ListItem className="!pt-0 !pb-0" key={g.id} id={g.id}>
                            <div className={`bg-content w-12 h-12 m-1 bg-no-repeat bg-cover cursor-pointer border-solid border-2 duration-300 ${g.id === Context.guild.selectedGuild.guild?.id ? Context.guild.selectedGuild.inServer ? 'border-blue-500' : 'border-red-500' : 'border-neutral-700'} rounded-full shadow-lg hover:shadow-xl hover:border-neutral-300`} onClick={() => FetchGuild(g, Context.guild.setGuild, Context)} style={g.icon && {backgroundImage: `url('https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png')` }}></div>
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </GuildGrid>
    )
}