import { Button } from './Button'
import { Auth } from './Auth'
import { Title } from './Title'
import { Message } from './Message'
import { Container } from './Container'
import { useContext } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { Contxt } from '../Context'

// Remote Buttons
import { Remote } from './Remote/Remote'

// Guilds
import { GuildSquare } from './GuildSquare'

export const Panel = () => {
  const Context = useContext(Contxt)

  return (
    <div className="h-screen bg-main flex flex-direction-row justify-center p-12 px-4 md:px-12 pt-20 overflow-scroll">
      { !Context.auth.auth.logged ? 
      (
        <Message>
          <Title className='text-white'>Hey!<br/>Please login to continue</Title>
          <Auth/>
        </Message>
      )
      :
      !Context.guild.selectedGuild ?
      <Container>
        <Title>Hey!<br/>Please select a server to continue</Title>
        <div>
          <GuildSquare/>
        </div>
      </Container>
      :
      Context.guild.selectedGuild.inServer
        ?
          <Remote/>
        :
        (
          <Container>
            <Title>
              Hey!<br/>In order to use the bot you will have to invite him first.
            </Title>
            <Button
              href="#"
              className={`h-12`}
			  
            >
              <PowerSettingsNewIcon/>
              Invite
            </Button>
          </Container>
        )
      }
    </div>
  )
}