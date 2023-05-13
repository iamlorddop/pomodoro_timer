import React from 'react'

export default function Sidebar() {
    return (
        <>
            <aside className='aside-container'>
                <nav className='navigation'>
                    <ul className='navigation-list'>
                        <li className='navigation-list__item'>
                            <a href=''>Pomodoro timer</a>
                        </li>
                        <li className='navigation-list__item'>
                            <a href=''>What is Pomodoter?</a>
                        </li>
                        <li className='navigation-list__item'>
                            <a href=''>What is Pomodoro
                                Technique?</a>
                        </li>
                        <li className='navigation-list__item'>
                            <a href=''>How to use the
                                Pomodoro Timer?</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}