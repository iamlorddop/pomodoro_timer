import React from 'react'

export default function Pomodoro() {
    return (
        <>
            <div className='pomodoro-animation__container'>
                <p className='text'>
                    Time to focus
                    <span>
                        <span>25</span> : <span>00</span> : <span>00</span>
                    </span>
                </p>
                <div className='sun-or-moon'></div>
                <div className='table'></div>
            </div>
        </>
    )
}