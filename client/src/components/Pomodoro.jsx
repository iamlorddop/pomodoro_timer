import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import pomodoro from '../assets/img/pomodoro.png'

library.add(fab)

export default function Pomodoro() {
    return (
        <>
            <div className='pomodoro-timers-flex-container'>
                <div className='pomodoro-timers'>
                    <div className='pomodoro-timer'>
                        <span className='pomodoro-timer-name'>Pomodoro</span>
                        <span className='pomodoro-timer-time'>25 : 00</span>
                    </div>
                    <div className='pomodoro-timer'>
                        <span className='pomodoro-timer-name'>Short break</span>
                        <span className='pomodoro-timer-time'>05 : 00</span>
                    </div>
                    <div className='pomodoro-timer'>
                        <span className='pomodoro-timer-name'>Long break</span>
                        <span className='pomodoro-timer-time'>15 : 00</span>
                    </div>
                </div>
                <div className='pomodoro-timers-button-container'>
                    <button className='pomodoro-timers-button setting-button'>
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                        </span>
                        Settings
                    </button>
                    <button className='pomodoro-timers-button start-or-end-button'>Start timer</button>
                </div>
            </div>
            <div className='pomodoro-animation__container'>
                <p className='text'>
                    Time to focus
                    <span>
                        <span>25</span> : <span>00</span> : <span>00</span>
                    </span>
                </p>
                <div className='sun-or-moon'></div>
                <div className='pomodoro-animation__container__pomodoro-image'>
                    <img src={pomodoro} alt='pomodoro'/>
                </div>
                <div className='table'></div>
            </div>
        </>
    )
}