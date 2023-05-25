import React from 'react'
import { useState } from 'react'
import AddTaskInput from './AddTaskInput'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default  function AddTask({list, name, noteText, project, act, eastPomos}) {
    const [edit, setEdit] = useState(false)

    const EditButton = () => {
        const handleClick = () => {
            setEdit(true)
        }

        return (
            <button className='more-button' onClick={handleClick}>
                <span></span>
            </button>
        )
    }

    return (
        <>
            {list?.length > 0 ? (
                <>
                    {list.map((entry, index) => (
                        <div className='task-container task-container-hover grab' key={index}>
                            <div className='task-container__item'>
                                <div className='task-container__item__subitem task-container__item__tasks-name'>
                                    <button>
                                        <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                                    </button>
                                    <span>{name}</span>
                                </div>
                                <div className='task-container__item__subitem'>
                                    <span>{act} / {eastPomos}</span>
                                    <EditButton/>
                                </div>

                            </div>
                            {noteText?
                                <div className='task-container__note'>{noteText}</div>
                                : null
                            }
                            {project?
                                <div className='task-container__project-name'>Project: <span>{project}</span></div>
                                : null
                            }
                        </div>
                    ))}
                </>
                ) : null
            }
        </>

    )
}