export const Phone = ({ children, guild }) => {

    return (
        <div data-aos="fade-up" className="m-auto p-[10px_10px_30px] w-[380px] h-[95%] shadow-lg bg-neutral-900 rounded-[30px] flex justify-center">
            <div className="z-10 w-[170px] h-[20px] bg-neutral-900 absolute rounded-[0_0_20px_20px]"><span className="w-[60px] h-[5px] bg-[#d2d2d2] block m-auto mt-[5px] rounded-[20px]"></span></div>
            {/* <div style={{backgroundImage: `url("https://cdn.discordapp.com/icons/${guild.guild.id}/${guild.guild.icon}.png")`}} className={`w-full bg-no-repeat bg-center bg-cover bg- h-full ${guild.guild.icon ? 'bg-[#f2f2f285] backdrop-blur-lg' : 'bg-[#f2f2f2]'} rounded-[30px] overflow-hidden relative`}> */}
            <div className='w-full bg-no-repeat bg-center bg-cover bg- h-full bg-[#f2f2f2] rounded-[30px] overflow-hidden relative'>
                { children }
            </div>
        </div>
    )
}