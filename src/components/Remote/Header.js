import { useContext } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { Contxt } from '../../Context'

export const Header = () => {
    const Context = useContext(Contxt)
    
    return (
        <div className="p-2 h-16 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-center items-end text-white	">
            <ArrowBackIosIcon onClick={() => Context.guild.setGuild(false)} className="cursor-pointer" />
            <span className="flex justify-center items-end w-full h-[inherit]">{Context.guild.selectedGuild.guild.name}</span>
            <HomeIcon onClick={() => Context.guild.setGuild(false)} className="cursor-pointer" />
        </div>
    )
}