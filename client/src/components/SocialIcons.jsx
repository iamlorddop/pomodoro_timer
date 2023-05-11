import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
export default function SocialIcons() {
    return (
        <>
            <a href='https://github.com/iamlorddop/pomodoro_timer' target='_blank' className='social-link'>
                <FontAwesomeIcon icon='fa-brands fa-github' />
            </a>
            <a href='https://t.me/pomodoter' target='_blank' className='social-link'>
                <FontAwesomeIcon icon='fa-brands fa-telegram' />
            </a>
        </>
    )
}
