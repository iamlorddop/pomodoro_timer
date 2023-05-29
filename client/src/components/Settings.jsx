import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default function Settings() {
    const [showSettings, setShowSettings] = useState(false)
    const [showTimer, setShowTimer] = useState(false)
    const [showTasks, setShowTasks] = useState(false)
    const [showSound, setShowSound] = useState(false)

    const handleClickTimer = () => {
        if (!showTimer) {
            setShowTimer(true)
        } else {
            setShowTimer(false)
        }
    }

    const handleClickTasks = () => {
        if (!showTasks) {
            setShowTasks(true)
        } else {
            setShowTasks(false)
        }
    }

    const handleClickSound = () => {
        if (!showSound) {
            setShowSound(true)
        } else {
            setShowSound(false)
        }
    }

    const handleClick = () => {
        if (!showSettings) {
            setShowSettings(true)
        } else {
            setShowSettings(false)
            setShowTimer(false)
            setShowTasks(false)
            setShowSound(false)
        }
    }

    const Timer = () => {
        return (
            <div className='settings__setting-timer'>
                <button className='settings__leave-button' onClick={handleClickTimer}>
                    <FontAwesomeIcon icon='fa-solid fa-arrow-left' />
                </button>
                Time (minutes)
                <div className='settings__setting-timer__container'>
                    <div className='settings__setting-timer__container__item'>
                        <span>Pomodoro</span>
                        <input type='number' value='25' min='25' readOnly/>
                    </div>
                    <div className='settings__setting-timer__container__item'>
                        <span>Short break</span>
                        <input type='number' value='5' min='5' readOnly/>
                    </div>
                    <div className='settings__setting-timer__container__item'>
                        <span>Long break</span>
                        <input type='number' value='15' min='15' readOnly/>
                    </div>
                </div>
                <div className='settings__setting-timer__interval'>
                    Long Break Interval
                    <input type='number' value='4' min='4' readOnly/>
                </div>
            </div>
        )
    }

    const Tasks = () => {
        return (
            <div className='settings__setting-tasks'>
                <button className='settings__leave-button' onClick={handleClickTasks}>
                    <FontAwesomeIcon icon='fa-solid fa-arrow-left' />
                </button>
                <p>If you enable "Auto Switch Tasks", the active task will be automatically checked and switched to the next task when the actual pomodoro count reaches the estimated count.</p>
                <div className='settings__setting-tasks__auto-switch'>
                    Auto Switch Tasks
                    <div className='settings__setting-tasks__auto-switch__input-container'>
                        <input type='radio' value='off' readOnly/>
                        <input type='radio' value='on' readOnly/>
                    </div>
                </div>
            </div>
        )
    }

    const Sound = () => {
        return (
            <div className='settings__setting-sound'>
                <button className='settings__leave-button' onClick={handleClickSound}>
                    <FontAwesomeIcon icon='fa-solid fa-arrow-left' />
                </button>
                <div className='settings__setting-sound__switch-container'>
                    <div className='settings__setting-sound__auto-switch'>
                        Alarm Sound
                        <div className='settings__setting-sound__auto-switch__input-container'>
                            <select name='alarm sound' id='alarm-sound'>
                                <option value='kitchen'>Kitchen</option>
                                <option value='bird'>Bird</option>
                                <option value='digital'>Digital</option>
                                <option value='wood'>Wood</option>
                            </select>
                        </div>
                    </div>
                    <div className='settings__setting-sound__auto-switch'>
                        Volume
                        <div className='settings__setting-sound__auto-switch__input-container'>
                            50
                            <input type='range' value='off' readOnly/>
                        </div>
                    </div>
                    <div className='settings__setting-sound__auto-switch'>
                        Repeat
                        <div className='settings__setting-sound__auto-switch__input-container'>
                            <input type='number' min='1' readOnly/>
                        </div>
                    </div>
                    <div className='settings__setting-sound__auto-switch'>
                        Ticking Sound
                        <div className='settings__setting-sound__auto-switch__input-container'>
                            <select name='ticking sound' id='ticking-sound'>
                                <option value='none'>None</option>
                                <option value='ticking fast'>Ticking Fast</option>
                                <option value='ticking slow'>Ticking Slow</option>
                                <option value='white noise'>White Noise</option>
                                <option value='brown noise'>Brown Noise</option>
                            </select>
                        </div>
                    </div>
                    <div className='settings__setting-sound__auto-switch'>
                        Volume
                        <div className='settings__setting-sound__auto-switch__input-container'>
                            50
                            <input type='range' value='off' readOnly/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const SettingsSelectContainer = () => {
        return (
            <div className='settings__select-container'>
                <button className='settings__select-item' onClick={handleClickTimer}>
                    <FontAwesomeIcon icon='fa-solid fa-clock' />
                    <span>Timer</span>
                </button>
                <button className='settings__select-item' onClick={handleClickTasks}>
                    <FontAwesomeIcon icon='fa-solid fa-circle-check' />
                    <span>Tasks</span>
                </button>
                <button className='settings__select-item' onClick={handleClickSound}>
                    <FontAwesomeIcon icon='fa-solid fa-circle-play' />
                    <span>Sound</span>
                </button>
            </div>
        )
    }

    return (
        <>
            <button className='pomodoro-timers-button setting-button' onClick={handleClick}>
                        <span>
                            <FontAwesomeIcon icon='fa-solid fa-gear' />
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
                                <FontAwesomeIcon icon='fa-solid fa-xmark' />
                            </button>
                        </div>
                        {showTimer ? <Timer/> :
                            showTasks ? <Tasks/> :
                                showSound ? <Sound/> : <SettingsSelectContainer/>
                        }
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