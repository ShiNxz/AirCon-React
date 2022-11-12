import SettingsPowerIcon from '@mui/icons-material/SettingsPower'

export const Footer = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0 bg-second border-secondary border-t-[1px] z-10 text-white">
        <div className="flex flex-wrap items-center px-4 py-2 justify-between">
            <div className="flex flex-wrap justify-center">
                <ul className="flex items-center space-x-4">
                    <li>Website</li>
                    <li>Docs</li>
                </ul>
            </div>
            <div className="flex justify-center mt-4 lg:mt-0">
                <SettingsPowerIcon/>
                <SettingsPowerIcon/>
                <SettingsPowerIcon/>
            </div>
        </div>
    </footer>
  )
}