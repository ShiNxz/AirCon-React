import { Panel } from '../components/Panel'
import { LogPanel } from '../components/LogPanel'
import { GuildList } from '../components/GuildList'
import { Contxt } from '../Context'
import { useContext } from 'react'

const Index = () => {
    const Context = useContext(Contxt)

    return <>
        {Context.auth.auth.logged && <GuildList/>}
        <Panel/>
        <LogPanel/>
    </>
}

export default Index