import { ThemeContext, themes } from '../../contexts/ThemeContext'
import Toggle from '../Toggle'
import Pomodoro from '../Pomodoro'
import AddTaskPanel from '../AddTaskPanel'
import SocialIcons from '../SocialIcons'
import {useState} from 'react'

function Root() {
    const [dropStyle, setDropStyle] = useState({})
    const styleTranslateFifty = {transform: 'translateX(50px)'}

  return (
      <>
          <header className='header container'>
              <a href='#' className='logo'>
                  <img src={process.env.PUBLIC_URL + 'img/logo.svg'} alt='pomodoro logo'/>
                  <span>pomodoter</span>
              </a>
              <ThemeContext.Consumer>
                  {({ theme, setTheme}) => (
                      <Toggle
                          onChange={() => {
                              if (theme === themes.light) {
                                  setDropStyle({transform: 'translateX(100px)'})
                                  setTheme(themes.dark)
                              }
                              if (theme === themes.dark) {
                                  setDropStyle({transform: 'translateX(0)'})
                                  setTheme(themes.light)
                              }
                          }}
                          value={theme === themes.light}
                          styleDrop={dropStyle}
                      />
                  )}
              </ThemeContext.Consumer>
          </header>
          <div className='container'>
              <main className='container main'>
                  <h1 className='hidden'>An online Pomodoro Timer to boost your productivity</h1>
                  <div className='pomodoro-container'>
                      <Pomodoro/>
                      <AddTaskPanel/>
                  </div>
                  <section className='information'>
                      <h2 className='title'>What is Pomodoter?</h2>
                      <p className='text'>Pomodoter is a customizable pomodoro timer that works on desktop, chrome extension and mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <a href='https://www.techtarget.com/whatis/definition/pomodoro-technique#:~:text=The%20Pomodoro%20Technique%20is%20a,after%20four%20consecutive%20work%20intervals.' target='_blank' className='text-link'>Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.</p>
                  </section>
                  <section className='information'>
                      <h2 className='title'>What is Pomodoro Technique?</h2>
                      <p className='text'>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href='https://en.wikipedia.org/wiki/Pomodoro_Technique' target='_blank' className='text-link'>Wikipedia</a></p>
                  </section>
                  <section className='information'>
                      <h2 className='title'>How to use the Pomodoro Timer?</h2>
                      <ol className='list'>
                          <li className='text'><span className='text-highlight'>Add tasks</span> to work on today</li>
                          <li className='text'><span className='text-highlight'>Set estimate pomodoros</span> (1 = 25min of work) for each tasks</li>
                          <li className='text'><span className='text-highlight'>Select a task</span> to work on</li>
                          <li className='text'><span className='text-highlight'>Start timer</span> and focus on the task for 25 minutes</li>
                          <li className='text'><span className='text-highlight'>Take a break</span> for 5 minutes when the alarm ring</li>
                          <li className='text'><span className='text-highlight'>Iterate</span> 3-5 until you finish the tasks</li>
                      </ol>
                  </section>
              </main>
          </div>
          <footer className='container footer'>
              <div className='footer-navigation'>
                  <a href='#' className='text'>Home</a>
                  <a href='mailto:pomodoter@gmail.com' className='text'>Contact us</a>
                  <a href='#' className='text'>Pomodoro timer</a>
              </div>
              <div className='social'>
                  <SocialIcons/>
              </div>
              <div className='text'>©️ Pomodoter 2023. All Rights Reserved.</div>
          </footer>
      </>
  )
}

export default Root;
