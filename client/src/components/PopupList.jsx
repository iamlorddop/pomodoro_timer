import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PopupList() {
    return (
        <>
            <div className='popup-list-container'>
                <ul className='popup-list'>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-trash-can" /></span>
                            Clear finished tasks
                        </button>
                    </li>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-trash-can" /></span>
                            Clear all tasks
                        </button>
                    </li>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-floppy-disk" /></span>
                            Save as template
                        </button>
                    </li>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-plus" /></span>
                            Add from templates
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}