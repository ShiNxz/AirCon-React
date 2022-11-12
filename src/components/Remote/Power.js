import { useContext } from 'react'

import Button from '@mui/material/Button';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { Contxt } from '../../Context'

export const Power = (props) => {
    const Context = useContext(Contxt)

    return (
        <Button
            variant="outlined"
            onClick={!props.Await && props.power ? (() => props.Action('stop')) : (() => props.Action('start'))}
            disabled={props.Await || !Context.guild.selectedGuild.userState}
            color={props.power ? 'error' : 'success'}
            className="!block !m-auto !mt-12 !rounded-xl"
        >
            <>
                <PowerSettingsNewIcon className="mr-[0.2rem]" />
                {props.power ? 'Power Off' : 'Power On'}
            </>
        </Button>
    )
}