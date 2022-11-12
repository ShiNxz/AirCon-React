import { Contxt } from '../Context'
import { useContext } from 'react'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'

const timeDifference = previous => {
    let difference = Math.floor(Date.now() / 1000) - previous
    let output = ``

    if (difference < 60)
        output = `${difference} seconds ago` // Less than a minute has passed
    else if (difference < 3600)
        output = `${Math.floor(difference / 60)} minutes ago`// Less than an hour has passed
    else if (difference < 86400)
        output = `${Math.floor(difference / 3600)} hours ago` // Less than a day has passed
    else if (difference < 2620800)
        output = `${Math.floor(difference / 86400)} days ago` // Less than a month has passed
    else if (difference < 31449600)
        output = `${Math.floor(difference / 2620800)} months ago` // Less than a year has passed
    else
        output = `${Math.floor(difference / 31449600)} years ago` // More than a year has passed

    return output
}

const Log = ({ log }) => {
    return <li className="h-16 rounded-xl w-full bg-gray-800 flex justify-between items-center px-2 my-2 text-xs">
            <div className="flex items-center">
                <Avatar
                    className="mx-2 border-2 border-neutral-600"
                    src={log.user_avatar}
                />
                <span>{log.user_name} <span className='text-[0.5rem] text-slate-400'>({timeDifference(log.unix)})</span></span>
            </div>
            <div>{log.text}</div>
        </li>
}

export const LogPanel = () => {
    const Context = useContext(Contxt)

    if(Context.guild.selectedGuild && typeof Context.guild.selectedGuild.logs != 'undefined' && Context.guild.selectedGuild.logs.length > 0)
        return (
            <div className="h-full fixed right-0 top-0 bottom-0 w-96 text-white py-[3%] p-4 z-[5] overflow-y-scroll bg-second hidden xl:block">
                <List>
                    {
                        Context.guild.selectedGuild.logs.map(log => <Log key={log.id} log={log}/>)
                    }
                </List>
            </div>
        )
    else
        return <></>
}