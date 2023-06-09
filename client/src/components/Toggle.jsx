import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
function Toggle ({ value, onChange, styleDrop }) {
    return (
        <>
            <div className='switch-theme'>
                <div className='switch-theme__container-radio'>
                    <input
                        className='switch-theme__radio switch-theme__icon--light'
                        type='radio'
                        name='color-theme'
                        onClick={onChange}
                        value='light'
                        readOnly
                    />
                    <input
                        className='switch-theme__radio switch-theme__icon--auto'
                        type='radio'
                        name='color-theme'
                        onClick={onChange}
                        checked={value}
                        value='auto'
                        readOnly
                    />
                    <input
                        className='switch-theme__radio switch-theme__icon--dark'
                        type='radio'
                        name='color-theme'
                        onClick={onChange}
                        value='dark'
                        readOnly
                    />
                </div>
                <div className='switch-theme__container-icons'>
                    <FontAwesomeIcon icon="fa-solid fa-sun" />
                    <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
                    <FontAwesomeIcon icon="fa-solid fa-moon" />
                </div>
                <div className='switch-theme__container-drop'>
                    <div className='switch-theme__drop' style={styleDrop}></div>
                </div>
            </div>
        </>

    )
}

export default Toggle