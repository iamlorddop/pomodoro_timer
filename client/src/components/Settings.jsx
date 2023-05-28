import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default function Settings() {
    const [showSettings, setShowSettings] = useState(false)

    const handleClick = () => {
        if (!showSettings) {
            setShowSettings(true)
        } else {
            setShowSettings(false)
        }
    }

    const SettingsSelectContainer = () => {
        return (
            <div className='settings__select-container'>
                <button className='settings__select-item'>
                    <FontAwesomeIcon icon="fa-solid fa-clock" />
                    <span>Timer</span>
                </button>
                <button className='settings__select-item'>
                    <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                    <span>Tasks</span>
                </button>
                <button className='settings__select-item'>
                    <FontAwesomeIcon icon="fa-solid fa-circle-play" />
                    <span>Sound</span>
                </button>
            </div>
        )
    }

    return (
        <>
            <button className='pomodoro-timers-button setting-button' onClick={handleClick}>
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                        </span>
                Settings
            </button>
            {showSettings ?
                <>
                    <div className='dark-background-active'></div>
                    <div className='settings-container'>
                        <div className='settings__close-panel'>
                            Settings
                            <button className='settings__close-panel__cross' onClick={handleClick}>
                                <FontAwesomeIcon icon="fa-solid fa-xmark" />
                            </button>
                        </div>
                        <SettingsSelectContainer/>
                        <div className='settings__button-submit-panel'>
                            <button className='settings__button-submit'>OK</button>
                        </div>
                    </div>
                </>
                : null
            }

        </>
    )
}