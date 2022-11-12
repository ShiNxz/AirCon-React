import { useContext } from 'react'

import { Contxt } from '../../Context'

export const Footer = () => {
    const Context = useContext(Contxt)
    
    return (
        <div className={`p-0 h-0 duration-300 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-center items-end text-white absolute w-full bottom-0 ${Context.msg.mode.open && '!h-min p-6'}`}>
            {Context.msg.mode.open && <span data-aos="fade-up" className="flex justify-center items-end mb-[2px] w-full h-[inherit]">{Context.msg.msg.msg}</span>}
        </div>
    )
}