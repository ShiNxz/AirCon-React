import { Contxt } from '../Context'
import { useContext } from 'react'
import { Title } from '../components/Title'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { useEffect, useState } from 'react'

import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import useAxios from '../lib/useAxios'

const Support = () => {
    const Context = useContext(Contxt)
    const [guilds, setGuilds] = useState([])

    useEffect(() => {
        Context.loading.setLoading(true)
        
        const FetchData = async () => {
            const { data, success, error } = await useAxios(`support/guilds`, `GET`)

			if(success)
				setGuilds(data)
			else
				setGuilds(error)

          	Context.loading.setLoading(false)
        }
        FetchData()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function timeDifference(previous) {
    
        var difference = Math.floor(Date.now() / 1000) - previous

        let output = ``
        if (difference < 60) {
            // Less than a minute has passed:
            output = `${difference} seconds ago`;
        } else if (difference < 3600) {
            // Less than an hour has passed:
            output = `${Math.floor(difference / 60)} minutes ago`;
        } else if (difference < 86400) {
            // Less than a day has passed:
            output = `${Math.floor(difference / 3600)} hours ago`;
        } else if (difference < 2620800) {
            // Less than a month has passed:
            output = `${Math.floor(difference / 86400)} days ago`;
        } else if (difference < 31449600) {
            // Less than a year has passed:
            output = `${Math.floor(difference / 2620800)} months ago`;
        } else {
            // More than a year has passed:
            output = `${Math.floor(difference / 31449600)} years ago`;
        }

        return output
    }

    return (
        <div className="h-screen bg-main flex flex-direction-row justify-center p-12 pt-20 overflow-scroll">
            {
            Context.auth.auth.supporter ? 
                (
                    <Container>
                        <Title>Hey!<br/>Please select a server to continue</Title>

                        <List>
                            {guilds.map(g => 
                                <li key={g.guildId} className="h-16 rounded-xl w-full bg-gray-800 flex justify-between items-center px-5 my-5">
                                    <div className="flex items-center">
                                        <Avatar
                                            className="mx-2 border-2 border-neutral-600"
                                            src={`https://cdn.discordapp.com/icons/${g.guildId}/${g.icon}.png?size=300`}
                                        />
                                        <span>{g.name} <span className='text-xs text-slate-400'>({timeDifference(g.unix)})</span></span>
                                    </div>
                                    <Button onClick={() => window.open(g.invite, '_blank', 'height=800, width=500')} className={'h-8 mx-2'}>JOIN</Button>
                                </li>
                            )}
                        </List>

                    </Container>
                ) : (
                    <>
                        NOT Supporter, join us!
                    </>
                )
            }
        </div>
    )
}

export default Support