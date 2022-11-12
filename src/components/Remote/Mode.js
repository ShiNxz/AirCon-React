import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { remote } from '../../Config'
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const Mode = (props) => {

    const handleChange = (event, newAlignment) => {
        props.setMode(newAlignment);
    }

    return (
        <ToggleButtonGroup
            value={props.mode}
            exclusive
            onChange={handleChange}
            size="small"
            sx={{width: '100%'}}
        >
            {remote.modes.map(m => <ToggleButton className="flex flex-col w-full" key={m} value={m}><AcUnitIcon/>{m}</ToggleButton>)}
        </ToggleButtonGroup>
    )
}