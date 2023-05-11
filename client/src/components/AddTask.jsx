import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default function AddTask() {
    return (
        <>
            <button className='button-add'>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                <span>Add task</span>
            </button>
        </>
    )
}