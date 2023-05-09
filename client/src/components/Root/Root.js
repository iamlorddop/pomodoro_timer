import '../../index.scss'
import logo from '../../assets/img/logo.svg'
import { ThemeContext, themes } from '../../contexts/ThemeContext'
import Toggle from '../Toggle'

function Root() {
  return (
      <>
          <header className='header container'>
              <a href='#' className='logo'>
                  <img src={logo} alt='pomodoro logo'/>
                  <span>pomodoter</span>
              </a>
              <ThemeContext.Consumer>
                  {({ theme, setTheme }) => (
                      <Toggle
                          onChange={() => {
                              if (theme === themes.light) setTheme(themes.dark)
                              if (theme === themes.dark) setTheme(themes.light)
                          }}
                          value={theme === themes.dark}
                      />
                  )}
              </ThemeContext.Consumer>
          </header>
          <div className='container container-aside-main'>
              <aside>
                  <p>There is aside</p>
              </aside>
              <main>
                  <p>There is main</p>
              </main>
          </div>
          <footer className='container footer'>
              There is a footer
          </footer>
      </>
  )
}

export default Root;
