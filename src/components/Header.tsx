import adityaProfile from '../assets/Aditya profile.jpeg'

interface HeaderProps {
  currentTime: Date
  isDarkMode: boolean
  setIsDarkMode: (val: boolean) => void
  formatTime: (date: Date) => string
  formatDate: (date: Date) => string
}

const Header = ({ currentTime, isDarkMode, setIsDarkMode, formatTime, formatDate }: HeaderProps) => {
  return (
    <header className="portfolio-header">
      <div className="profile-info">
        <img src={adityaProfile} alt="Aditya Yadav Profile Picture" className="avatar" loading="lazy" />
        <h1>Hello, it's Aditya 👋</h1>
      </div>
      <div className="header-controls">
        <div className="time-badge" aria-label="Current local time">
          {currentTime.getHours() < 12 ? (
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
          <span>{formatTime(currentTime)}</span>
          <span className="date-divider">&nbsp;&nbsp;</span>
          <span>{formatDate(currentTime)}</span>
        </div>
        <div className="theme-toggle-container">
          <label className="toggle-switch" aria-label="Toggle dark mode">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle dark mode"
            />
            <span className="slider"></span>
          </label>
          <span aria-hidden="true">Dark</span>
        </div>
      </div>
    </header>
  )
}

export default Header
