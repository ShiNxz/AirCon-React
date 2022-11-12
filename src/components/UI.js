import { useContext } from 'react'
import { Contxt } from '../Context'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import LoadingBar from 'react-top-loading-bar'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Slide from '@mui/material/Slide'

const SlideTransition = props => <Slide {...props} direction="down" />

export const UI = ({ children }) => {
    const Context = useContext(Contxt)

    return (
        <div className="App">
            <LoadingBar
                color='#0099ff'
                progress={Context.progress.progress}
                onLoaderFinished={() => Context.progress.setProgress(0)}
            />

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={Context.loading.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        
            {children}

            <Snackbar
                open={Context.msg.mode.open}
                autoHideDuration={3000}
                onClose={() => Context.msg.mode.setOpen(false)}
                message={Context.msg.msg.msg}
                TransitionComponent={SlideTransition}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                action={
                  <>
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        sx={{ p: 0.5 }}
                        onClick={() => Context.msg.mode.setOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                  </>
                }
            />
        </div>
    )
}