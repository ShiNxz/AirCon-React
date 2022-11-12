import { remote } from '../../Config'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CircularSlider from 'react-circular-slider-svg';

export const Temps = ({temp, setTemp}) => {

    return (
        <>
            <div className="flex items-center justify-center">
                <span className="text-5xl absolute mb-[calc(1.5rem)]">{parseInt(temp)}°</span>
                <CircularSlider
                    minValue={remote.temps[0]}
                    maxValue={remote.temps[remote.temps.length-1]}
                    handle1={{
                        value: temp,
                        onChange: v => setTemp(v)
                    }}
                    startAngle={40}
                    endAngle={320}
                    arcColor={"#0099ff"}
                    size={250}
                    //coerceToInt={true}
                />
            </div>
            <ButtonGroup variant="contained">
                <Button onClick={() => remote.temps.includes(parseInt(temp)-1) && setTemp(temp-1)}><RemoveIcon/></Button>
                <Button onClick={() => remote.temps.includes(parseInt(temp)+1) && setTemp(temp+1)}><AddIcon/></Button>
            </ButtonGroup>
        </>
    )
}