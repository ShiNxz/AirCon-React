import { Header } from './Header'
import { Footer } from './Footer'
import { Phone } from './Phone'
import { Power } from './Power'
import { Mode } from './Mode'
import { Temps } from './Temps'
import { Contxt } from '../../Context'
import { ax, remote } from '../../Config'
import { useContext, useEffect, useState } from 'react'
import useAxios from '../../lib/useAxios'

export const Remote = () => {
  const Context = useContext(Contxt)

  const [ power, setPower ] = useState(Context.guild.selectedGuild.connection != null ? true : false)
  const [ temp, setTemp ] = useState(Context.guild.selectedGuild.state?.temp || remote.temps[Math.floor(remote.temps.length / 3)])
  const [ mode, setMode ] = useState(Context.guild.selectedGuild.state?.Mode || remote.modes[0])

  useEffect(() => {
    setTemp(Context.guild.selectedGuild.state?.temp || remote.temps[Math.floor(remote.temps.length / 3)])
    setMode(Context.guild.selectedGuild.state?.Mode || remote.modes[0])

  }, [Context.guild.selectedGuild])

  const [ Await, setAwait ] = useState(false)

  const Action = async action => {
    setAwait(true)

    Context.loading.setLoading(true)

    const { data, success, error } = await useAxios(`${ax.endPoint}/${action}`, `POST`, {
      guildId: Context.guild.selectedGuild.guild.id,
      userId: Context.auth.auth.user.client.id,
      temp: parseInt(temp),
      mode,
    })

    if(success)
      setPower(power => !power)

    Context.msg.msg.setMsg(success ? data.success : error)
    setAwait(false)

    Context.loading.setLoading(false)
  }

  return (
    <Phone guild={Context.guild.selectedGuild}>
      <Header/>

      <Mode Await={Await} mode={mode} setMode={setMode} />

      <Temps Await={Await} temp={temp} setTemp={setTemp} />

      <Power
        Await={Await}
        power={power}
        Action={Action}
      />

      <Footer/>
    </Phone>
  )
}