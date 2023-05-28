export default function Settings() {
    const SettingsSelectContainer = () => {
        return (
            <div className='settings__select-container'>
                <button className='settings__select-item'>
                    X
                    <span>Timer</span>
                </button>
                <button className='settings__select-item'>
                    X
                    <span>Tasks</span>
                </button>
                <button className='settings__select-item'>
                    X
                    <span>Sound</span>
                </button>
            </div>
        )
    }

    return (
        <>
            <div className='dark-background-active'></div>
            <div className='settings-container'>
                <div className='settings__close-panel'>
                    Settings
                    <div className='settings__close-panel__cross'>X</div>
                </div>
                <SettingsSelectContainer/>
                <div className='settings__button-submit-panel'>
                    <button className='settings__button-submit'>Ok</button>
                </div>
            </div>
        </>
    )
}