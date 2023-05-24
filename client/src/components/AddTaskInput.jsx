import React from 'react'
import { useState } from 'react'
import AddTask from './AddTask'

export default function AddTaskInput({name, noteText, project}) {
    const [taskName, setTaskName] = useState('')
    const [note, setNote] = useState('')
    const [projectName, setProjectName] = useState('')
    const [save, setSave] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [del, setDel] = useState(false)

    const handleClickSave = () => {
        setSave(true)
    }

    const handleClickCancel = () => {
        setCancel(true)
    }

    const handleClickDelete = () => {
        setDel(true)
    }

    const AddNote = ({text}) => {
        const [show, setShow] = useState(false)

        const handleClick = () => {
            setShow(true)
        }

        const handleChange = (event) => {
            setNote(event.target.value)
        }

        return (
            <>
                {show ? <textarea className='task-container__note' value={note} onChange={handleChange}></textarea> : <button onClick={handleClick}>{text}</button>}
            </>

        )
    }

    const AddProject = ({text}) => {
        const [show, setShow] = useState(false)

        const handleClick = () => {
            setShow(true)
        }

        const handleChange = (event) => {
            setProjectName(event.target.value)
        }

        return (
            <>
                {show ?
                    <div className='task-container__project-name'>Project: <input type='text' placeholder="Enter project's name" value={projectName} onChange={handleChange}/>
                    </div>
                    : <button onClick={handleClick}>{text}</button>
                }
            </>

        )
    }

    const EstPomosInput = ({count}) => {
        const [value, setValue] = useState('')

        const handleChange = event => {
            setValue(event.target.value)
        }

        return (
            <input type='number' placeholder={count} value={value} onChange={handleChange} min='0'/>
        )
    }

    return (
        <>
            {
                (save && taskName) ? <AddTask name={taskName} noteText={note} project={projectName}/>
                : (del) ? null :
                <div className='task-container'>
                    <div className='task-container__input-container'>
                        <input type='text' placeholder="Enter task's name" value={taskName} onChange={event => setTaskName(event.target.value)} className='task-container__item__input-name'/>
                        Act / Est Pomodoros
                        <div className='task-container__subitem__input-pomos'>
                            <EstPomosInput count='0'/>
                            <span>/</span>
                            <EstPomosInput count='1'/>
                        </div>
                        <div className='task-container__subitem__input-adds'>
                            <AddNote text='+ Add Note'/>
                            <AddProject text='+ Add Project'/>
                        </div>
                    </div>
                    <div className='task-container__button-panel'>
                        <button onClick={handleClickDelete}>Delete</button>
                        <div>
                            <button onClick={handleClickCancel}>Cancel</button>
                            <button type='submit' onClick={handleClickSave}>Save</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}