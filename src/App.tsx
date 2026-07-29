import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FileModal from './components/FileModal'
interface ExperienceItem {
  company: string
  role: string
  date: string
}


function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [isMapHovered, setIsMapHovered] = useState<boolean>(false)

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Manage light/dark mode class on body~
  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [isDarkMode])

  // Format Time: e.g. "12:16 AM" or "12:16:45 AM"
  const formatTime = (date: Date): string => {
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    const minStr = minutes < 10 ? '0' + minutes : minutes
    return `${hours}:${minStr} ${ampm}`
  }

  // Format Date: e.g. "Jun 29, 2026"
  const formatDate = (date: Date): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  // Experience Data
  const experiences: Record<string, ExperienceItem[]> = {
    work: [
      { company: 'Cognifyz Technologies', role: 'Full Stack Developer', date: 'Feb 16/26 - Mar 18/26' },
      { company: '6Origin', role: 'SDE Intern', date: 'Nov 18/25 - Dec 18/25' },
    ]
  }

  // State and logic

  return (
    <>
      {/* Header */}
      <Header
        currentTime={currentTime}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        formatTime={formatTime}
        formatDate={formatDate}
      />

      {/* Main Grid */}
      <main className="portfolio-grid">

        {/* Card 1: Code Editor */}
        <div className="portfolio-card code-card">
          <div className="editor-header">
            <div className="window-controls">
              <span className="control-dot dot-red"></span>
              <span className="control-dot dot-yellow"></span>
              <span className="control-dot dot-green"></span>
            </div>
          </div>
          <div className="editor-content">
            <div className="line-numbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
            </div>
            <div className="code-area">
              <span className="tk-keyword">import</span> <span className="tk-variable">passion</span>, {'{'} <span className="tk-variable">craft</span> {'}'} <span className="tk-keyword">from</span> <span className="tk-string">'Aditya Yadav'</span>{'\n'}
              {'\n'}
              <span className="tk-comment">// Collection name</span>{'\n'}
              <span className="tk-keyword">export const</span> <span className="tk-variable">collection</span> = <span className="tk-string">'Development'</span>{'\n'}
              {'\n'}
              <span className="tk-comment">// Profile</span>{'\n'}
              <span className="tk-keyword">const</span> <span className="tk-variable">profile</span> = <span className="tk-keyword">new</span> <span className="tk-variable">Developer</span>({'{\n'}
              {'  '}<span className="tk-def">role</span>: {'{\n'}
              {'    '}<span className="tk-def">current</span>: <span className="tk-string">'CSE Student'</span>,{'\n'}
              {'    '}<span className="tk-def">aspiring</span>: <span className="tk-string">'Software Developer'</span>,{'\n'}
              {'  }'},{'\n'}
              {'  '}<span className="tk-def">workingAt</span>: {'{\n'}
              {'    '}<span className="tk-def">current</span>: [<span className="tk-string">'Algorithms'</span>, <span className="tk-string">'Open Source'</span>, <span className="tk-string">'DSA'</span>],{'\n'}
              {'  }'},{'\n'}
              {'  '}<span className="tk-def">weaving</span>: [<span className="tk-string">'logic'</span>, <span className="tk-string">'code'</span>, <span className="tk-string">'scalability'</span>],{'\n'}
              {'}'}, {'{'} <span className="tk-def">curiosity</span>: <span className="tk-boolean">true</span> {'}'}){'\n'}
              {'\n'}
              <span className="tk-comment">// Export</span>{'\n'}
              <span className="tk-keyword">export default</span> <span className="tk-variable">profile</span>
            </div>
          </div>
        </div>

        {/* Card 2: Skills Cloud */}
        <div className="portfolio-card skills-card">
          <div className="skills-container float-pills">
            <span className="skill-pill sk-pd">MERN Stack</span>
            <span className="skill-pill sk-ds">C/C++</span>
            <span className="skill-pill sk-ur">Data Structures & Algorithms</span>
            <span className="skill-pill sk-fe">React.js</span>
            <span className="skill-pill sk-wd">Node.js</span>
            <span className="skill-pill sk-pt">Express.js</span>
            <span className="skill-pill sk-dv">MongoDB</span>
            <span className="skill-pill sk-ux">Git & GitHub</span>
            <span className="skill-pill sk-il">Rest APIs</span>
            <span className="skill-pill sk-td">Postman</span>
          </div>
        </div>

        {/* Card 3: Experience */}
        <div className="portfolio-card experience-card">
          <div className="tabs-header">
            <button className="tab-btn active">Work Experiences</button>
          </div>
          <div className="tab-content">
            <div className="experience-list">
              {experiences['work'].map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="exp-header">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-date">{exp.date}</span>
                  </div>
                  <span className="exp-role">{exp.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4: Dotted Map */}
        <div
          className="portfolio-card map-card"
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            padding: 0
          }}
        >
          {/* ── Dotted map ── */}
          <svg
            viewBox="0 0 340 200"
            width="100%"
            role="img"
            aria-label="Dotted map of Maharashtra with Nagpur location marker"
            style={{ display: "block" }}
          >
            <defs>
              <pattern id="map-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.1" fill="#4a4f6a" />
              </pattern>

              <mask id="map-mask">
                <rect width="100%" height="100%" fill="black" />
                <path d="M54.8,71.0L55.7,73.0L56.4,74.6L56.5,76.2L56.5,78.2L56.8,79.3L57.6,80.1L57.7,82.6L58.2,84.3L59.2,85.9L58.4,86.5L58.4,86.8L58.3,87.8L58.4,88.9L58.6,89.6L58.6,90.4L58.7,90.7L58.9,90.4L59.1,90.5L59.6,92.1L59.5,92.6L59.5,93.2L60.0,93.2L59.4,93.7L59.3,94.1L59.3,94.2L59.3,94.6L59.2,94.7L58.9,95.2L58.8,96.0L59.6,96.6L59.4,96.7L59.2,97.4L59.6,96.9L60.0,96.6L60.2,95.6L60.3,95.2L60.8,94.3L61.6,94.5L63.4,93.5L64.1,91.6L64.6,94.1L65.4,94.4L64.1,95.2L63.3,95.3L62.9,96.0L62.9,97.1L62.1,97.1L62.7,98.6L63.6,98.5L64.0,99.3L62.4,100.1L61.6,100.0L61.1,99.9L60.7,101.1L60.5,102.8L60.9,104.4L62.5,107.3L62.0,107.4L62.0,107.8L61.8,108.6L61.8,108.8L61.6,109.4L61.8,109.9L61.9,110.8L61.9,111.1L62.4,111.5L62.4,112.7L63.3,113.5L64.1,114.2L64.7,114.5L65.7,115.0L66.5,115.7L64.9,115.7L64.1,115.7L63.7,115.0L63.1,114.5L62.8,114.7L62.8,115.0L62.9,115.8L62.7,116.4L63.4,116.4L64.2,118.0L63.9,118.7L64.1,119.5L64.3,120.9L64.8,121.8L65.1,122.7L65.5,123.3L65.5,124.2L66.1,125.0L66.4,125.6L67.0,127.0L67.1,127.7L68.1,129.8L67.7,131.1L68.1,132.0L68.3,133.0L68.9,134.0L68.9,134.6L68.5,135.1L68.9,135.8L69.7,136.9L69.8,138.2L69.7,139.0L69.3,139.4L69.9,139.7L70.4,140.1L70.7,141.0L71.3,141.7L70.8,142.5L70.8,142.2L70.0,141.9L70.2,142.5L70.8,143.2L71.1,144.2L71.2,145.2L72.2,147.2L72.4,149.4L71.8,149.5L72.5,150.3L72.3,150.5L72.3,150.8L72.5,152.1L72.6,153.1L72.4,153.7L72.6,154.1L72.8,154.9L73.0,155.9L73.2,156.8L73.2,158.1L73.3,158.5L73.5,159.0L73.7,160.5L73.8,161.3L74.4,161.8L73.5,162.0L73.9,163.0L73.5,163.1L73.3,163.7L73.9,164.9L74.5,166.2L74.9,168.2L75.6,169.8L76.2,171.4L76.6,173.1L77.3,175.2L77.5,176.5L77.4,177.2L78.0,177.6L78.7,180.1L79.1,180.5L79.1,180.5L79.4,180.6L80.3,180.9L80.8,181.2L81.2,181.6L81.7,182.7L81.9,182.8L82.5,184.0L82.7,184.2L83.2,185.4L82.9,185.9L83.5,186.4L88.5,184.9L91.1,186.6L91.7,188.3L96.3,187.6L103.8,182.3L102.6,168.1L111.8,159.6L130.2,151.8L137.7,139.6L145.1,139.7L153.5,141.8L157.8,140.8L158.6,136.6L162.6,131.9L165.8,130.2L168.8,131.1L169.3,129.9L169.4,128.6L170.9,127.6L169.7,126.3L171.2,126.1L172.3,125.6L174.4,124.9L174.4,122.5L175.5,120.3L175.0,118.2L177.4,118.0L180.0,118.1L181.4,115.6L183.0,114.6L183.3,113.0L183.6,111.3L186.7,110.0L188.5,111.3L187.4,113.3L189.4,113.9L190.4,115.0L192.5,114.2L193.0,113.6L191.8,112.1L192.6,111.0L191.9,110.3L193.3,110.1L192.5,109.4L193.9,109.1L193.9,107.7L194.5,107.0L195.3,107.4L197.1,106.9L201.3,99.7L202.4,97.8L200.7,96.8L200.5,95.9L199.6,94.8L198.8,94.3L198.5,93.1L199.5,92.6L199.8,91.5L200.9,91.5L200.8,89.0L201.4,87.7L202.4,86.5L202.7,85.2L207.0,87.4L210.1,86.5L213.8,81.5L212.7,75.7L214.4,74.4L215.4,72.5L213.6,69.7L218.2,71.4L221.3,71.4L227.3,72.6L229.1,73.8L230.3,75.7L232.0,76.0L232.2,78.3L239.0,81.3L240.2,77.6L244.5,79.1L247.9,79.4L252.7,77.9L256.3,78.4L260.0,81.5L259.6,87.1L257.5,91.5L260.1,95.3L259.8,100.2L262.8,101.8L271.3,98.7L277.7,83.1L282.8,86.2L284.2,82.3L285.0,78.6L280.2,76.0L277.7,73.3L273.3,71.5L274.9,68.1L274.5,62.0L276.0,58.8L278.3,53.6L278.8,50.7L275.5,49.5L276.9,44.8L274.0,39.0L274.1,35.0L279.2,31.2L279.1,29.1L278.0,28.8L277.4,28.4L277.0,27.8L276.2,27.0L275.4,27.0L274.3,26.9L274.1,27.1L273.6,27.6L272.5,26.7L272.9,25.0L272.2,23.9L272.0,23.4L270.9,22.5L269.4,21.4L267.7,20.7L265.9,20.9L264.3,21.5L262.5,22.5L259.4,22.6L256.2,22.1L253.0,21.4L251.6,22.5L249.4,22.8L248.6,22.2L247.5,21.0L247.6,20.2L246.9,19.1L245.0,18.7L243.9,19.1L242.2,18.8L240.5,17.9L239.9,18.1L239.6,19.9L237.4,20.0L235.9,21.3L234.1,21.2L232.8,20.8L231.6,21.5L230.9,21.9L230.7,22.5L231.3,23.4L230.3,24.2L228.9,24.4L227.6,24.4L226.9,24.9L226.2,24.4L224.9,24.8L223.7,24.6L222.3,24.4L221.4,24.1L220.8,23.6L219.3,23.5L218.5,23.9L217.4,24.0L217.4,23.2L217.1,22.1L216.9,21.2L215.8,20.9L215.1,22.0L213.8,22.1L212.9,21.5L212.8,22.1L210.8,22.6L210.2,23.6L209.2,24.6L208.0,25.2L206.5,25.9L205.4,26.4L203.5,27.2L201.9,27.5L200.6,26.9L199.8,26.6L198.8,27.3L197.5,27.9L196.8,27.6L195.9,27.7L195.2,27.2L194.1,27.1L193.6,27.9L192.9,27.7L192.0,26.3L191.5,27.5L190.6,26.4L190.2,25.2L189.4,24.6L188.9,23.1L190.1,22.6L191.9,23.0L194.2,23.0L193.2,21.8L192.3,18.3L191.6,17.7L190.6,16.9L189.6,16.8L187.4,16.9L185.4,16.9L185.2,17.5L184.1,18.1L183.1,18.6L182.2,17.8L180.7,17.8L178.7,18.3L176.3,19.7L175.2,20.4L174.4,21.3L173.0,20.9L172.2,21.6L171.2,21.7L170.4,23.5L169.7,26.6L163.3,32.7L161.3,35.2L158.0,36.1L156.0,35.6L153.8,35.6L152.9,34.9L152.8,34.2L152.1,33.7L152.5,33.2L153.7,32.8L152.9,31.3L153.4,30.9L152.4,29.3L149.1,27.8L145.8,27.1L145.0,27.4L144.7,27.4L144.1,27.5L143.4,27.3L142.9,27.3L142.1,27.4L141.0,27.3L140.3,27.3L139.6,27.6L138.9,27.5L138.3,27.6L137.5,27.2L136.6,27.5L135.7,27.6L134.6,27.3L133.4,27.2L132.3,27.2L130.9,26.9L129.4,27.1L128.8,26.6L126.7,26.6L124.4,25.5L123.6,24.5L123.2,23.6L120.5,21.5L117.9,20.4L117.3,20.4L116.9,20.3L116.0,20.9L115.1,21.0L112.4,20.5L111.8,20.1L110.9,19.7L109.1,19.1L108.3,18.7L107.2,17.9L107.0,17.5L107.1,17.2L107.1,16.8L107.0,14.9L107.2,12.4L106.3,11.5L105.8,11.1L105.2,10.8L104.9,10.1L105.2,9.7L104.4,9.3L101.3,10.8L99.0,12.0L97.1,11.4L88.1,16.0L89.5,19.5L86.9,20.2L89.0,24.0L91.3,23.6L93.8,22.8L97.0,22.4L101.1,22.1L98.6,24.8L94.7,25.3L94.0,26.3L90.5,30.0L87.4,32.3L84.7,34.1L80.8,33.7L85.2,35.8L91.0,42.9L90.8,44.4L90.7,45.7L89.7,45.7L88.6,46.6L87.4,46.9L88.1,48.5L86.7,49.3L85.9,50.1L84.5,50.1L82.8,50.3L81.9,48.9L81.1,48.2L79.9,47.8L78.6,47.7L78.2,47.5L78.3,47.2L77.9,46.0L77.2,46.1L77.1,46.8L76.7,47.6L75.8,47.9L76.0,48.6L76.4,49.0L76.6,49.4L77.6,49.7L78.0,50.5L78.2,51.3L77.4,52.6L76.7,53.5L76.5,53.9L76.3,54.6L75.7,54.9L75.3,55.8L76.1,56.4L76.2,57.1L76.3,57.8L76.3,58.6L76.1,59.1L76.1,59.7L76.0,60.7L74.9,60.7L74.4,60.3L73.6,60.4L72.7,60.6L72.4,61.4L71.5,62.8L70.5,63.3L69.9,64.8L68.9,64.4L68.2,64.0L66.1,63.5L65.1,63.7L63.4,62.5L61.5,60.0L59.5,61.3L58.8,62.1L57.1,63.0L56.4,64.1L56.7,66.8L55.1,68.2L55.6,69.4L54.8,70.9L54.8,71.0Z" fill="white" />
              </mask>

              {/* Purple glow radial for the location */}
              <radialGradient id="loc-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6af7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7c6af7" stopOpacity="0" />
              </radialGradient>

              <style>{`
            @keyframes map-ring1 {
              0%   { r: 5px;  opacity: 0.8; stroke-width: 2; }
              100% { r: 20px; opacity: 0; stroke-width: 1; }
            }
            @keyframes map-ring2 {
              0%   { r: 5px;  opacity: 0.6; stroke-width: 2; }
              100% { r: 35px; opacity: 0; stroke-width: 0.5; }
            }
            @keyframes map-core-pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50%       { opacity: 0.5; transform: scale(0.7); }
            }
            .map-ring1 { animation: map-ring1 2.5s ease-out infinite; }
            .map-ring2 { animation: map-ring2 2.5s ease-out infinite 0.6s; }
            .map-core  { animation: map-core-pulse 2.5s ease-in-out infinite; transform-origin: center; }
            @media (prefers-reduced-motion: reduce) {
              .map-ring1, .map-ring2, .map-core { animation: none; }
            }
          `}</style>
            </defs>

            {/* Dotted continents */}
            <rect width="100%" height="100%" fill="url(#map-dots)" mask="url(#map-mask)" />

            <foreignObject x="186" y="-16" width="100" height="100">
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                  className="location-marker"
                  onMouseEnter={() => setIsMapHovered(true)}
                  onMouseLeave={() => setIsMapHovered(false)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="core"></span>
                  <span className="ring ring1"></span>
                  <span className="ring ring2"></span>
                  <span className="glow"></span>
                </div>
              </div>
            </foreignObject>
          </svg>

          {/* ── Info card overlay (right side, vertically centered) ── */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "6%",
              transform: "translateY(-50%)",
              background: "rgba(20, 22, 34, 0.82)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "12px 16px",
              minWidth: "150px",
              maxWidth: "180px",
              color: "#fff",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              opacity: isMapHovered ? 1 : 0,
              visibility: isMapHovered ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
            }}
          >
            <p
              style={{
                margin: "0 0 4px",
                fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.04em",
                fontWeight: 400,
              }}
            >
              Maharashtra
            </p>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "13px",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
              }}
            >
              Based in Nagpur
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.5,
              }}
            >
              If you happen to be in Nagpur, let's grab a coffee.
            </p>
          </div>
        </div>



        {/* Card 5: Currently Building */}
        <div className="portfolio-card currently-building-card">
          <div className="tabs-header">
            <button className="tab-btn active">Currently building</button>
          </div>
          <div className="building-content">
            <div className="building-projects-list">
              <div className="building-project-item">
                <div className="bp-header">
                  <span className="bp-title">UrbanEats</span>
                  <span className="bp-status status-live">Live</span>
                </div>
                <p className="bp-desc">Solo-built MERN food delivery app — video feed, dual-role auth, food-partner portal.</p>
                <div className="bp-tags">
                  <span className="bp-tag">React</span>
                  <span className="bp-tag">Node.js</span>
                  <span className="bp-tag">MongoDB</span>
                </div>
                <a href="https://github.com/Aditya-collabs/UrbanEats.git" target="_blank" rel="noopener noreferrer" className="bp-repo-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  View repo
                </a>
              </div>

              <div className="building-project-item">
                <div className="bp-header">
                  <span className="bp-title">URL shortener</span>
                  <span className="bp-status status-progress">In progress</span>
                </div>
                <p className="bp-desc">Production-grade link shortener with QR generation and click analytics.</p>
                <div className="bp-tags">
                  <span className="bp-tag">React</span>
                  <span className="bp-tag">Tailwind</span>
                  <span className="bp-tag">Supabase</span>
                </div>
                <a href="#" className="bp-repo-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  View repo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: File Explorer */}
        <div className="portfolio-card files-card">
          <div className="files-grid">

            {/* File 1 */}
            <div className="file-item" onClick={() => setSelectedFile('More about me')}>
              <div className="file-icon-wrapper">
                <svg viewBox="0 0 32 40" className="file-svg"><path d="M4 .75h15.5L31.25 12.5V36A3.25 3.25 0 0 1 28 39.25H4A3.25 3.25 0 0 1 .75 36V4A3.25 3.25 0 0 1 4 .75Z" strokeWidth="1.5" className="fill-bg-primary stroke-border-primary"></path><path d="M19.5.75V9a3 3 0 0 0 3 3h8.75" fill="none" strokeWidth="1.5" className="stroke-border-primary"></path><g strokeWidth="1.5" strokeLinecap="round" className="stroke-code-ident"><line x1="8" y1="19" x2="24" y2="19"></line><line x1="8" y1="23" x2="24" y2="23"></line><line x1="8" y1="27" x2="19" y2="27"></line></g></svg>
              </div>
              <span className="file-name">More about me</span>
            </div>



            {/* File 5: Resume PDF */}
            <div className="file-item" onClick={() => setSelectedFile('Resume')}>
              <div className="file-icon-wrapper pdf-icon-wrapper">
                <svg viewBox="0 0 32 40" className="file-svg"><path d="M4 .75h15.5L31.25 12.5V36A3.25 3.25 0 0 1 28 39.25H4A3.25 3.25 0 0 1 .75 36V4A3.25 3.25 0 0 1 4 .75Z" strokeWidth="1.5" className="fill-bg-primary stroke-border-primary"></path><path d="M19.5.75V9a3 3 0 0 0 3 3h8.75" fill="none" strokeWidth="1.5" className="stroke-border-primary"></path></svg>
                <span className="pdf-badge">PDF</span>
              </div>
              <span className="file-name">Resume</span>
            </div>

          </div>
        </div>

      </main>

      <Footer />
      <FileModal selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
    </>
  )
}

export default App
