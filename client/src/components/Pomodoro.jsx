import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Settings from "./Settings";

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
                    <Settings/>
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
                <div className='cloud-1'></div>
                <div className='cloud-2'></div>
                <div className='pomodoro-animation__container__pomodoro-image'>
                    <div className='pomodoro-animation__container__pomodoro-image__eyes'></div>
                    <img src={process.env.PUBLIC_URL + 'img/pomodoro.png'} alt='pomodoro'/>
                </div>
                <div className='table'>
                    <div className='shadow-table'></div>
                </div>
            </div>
        </>
    )
}