import adityaResume from '../assets/Aditya_Yadav_Resume.pdf'

interface FileModalProps {
  selectedFile: string | null
  setSelectedFile: (file: string | null) => void
}

const FileModal = ({ selectedFile, setSelectedFile }: FileModalProps) => {
  if (!selectedFile) return null

  const getFileContent = (fileName: string) => {
    switch (fileName) {
      case 'More about me':
        return (
          <>
            <p>Hi, I'm Aditya. I'm a full-stack developer in the making — currently a third-year Computer Science student, spending most of my time turning half-formed ideas into working, deployed products.</p>
            <p>I build with the MERN stack, but what actually gets me excited is the gap between "it works" and "it's actually good" — the extra pass where a project stops feeling like a tutorial and starts feeling like something people would use.</p>
            <h3>How I work:</h3>
            <ul>
              <li><strong>Ship first, theorize later:</strong> I learn fastest by building something real, then going back to understand why it holds together.</li>
              <li><strong>Boring code wins:</strong> A clean, well-structured API beats a clever one every time — I'd rather it read well at 2am than impress someone for five minutes.</li>
              <li><strong>Every project is interview practice:</strong> If I can't explain a decision line by line, it's not done yet.</li>
            </ul>
            <p>Outside of classes, I’m usually found building something — currently trying to wrap my head around performance optimization and why my CSS always ends up in a fight with the browser.</p>
          </>
        )

      case 'Resume':
        return (
          <div className="resume-container">
            <div className="resume-section">
              <div className="resume-section-title">Summary</div>
              <p style={{ fontSize: '0.85rem' }}>Full-stack developer (MERN) with production internship experience building a live service marketplace. Shipped REST APIs, responsive React UIs, and MongoDB data layers for real users. Seeking a full-time role where I can write code that ships.</p>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Experience</div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">Software Developer Intern</span>
                  <span className="resume-item-date">Nov 2025 — Dec 2025</span>
                </div>
                <div className="resume-item-sub">6Origin, Nagpur</div>
                <p className="resume-item-desc">Delivered 5 production REST API endpoints for service listing and booking, reducing server response time ~30% via aggregation query optimisation. Built 4 responsive React UI components. Integrated MongoDB-backed user auth and service-listing data layer.</p>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Projects</div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">UrbanEats</span>
                  <span className="resume-item-date">2025</span>
                </div>
                <div className="resume-item-sub">Video-Feed Food Discovery &amp; Ordering App</div>
                <p className="resume-item-desc">Architected and shipped a full-stack food discovery platform solo — designing 4 route modules with 13 REST API endpoints. Built a dual-role auth system and a TikTok-style video food feed with auto-play scroll in React.</p>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Education</div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">B.Tech Computer Science Engineering</span>
                  <span className="resume-item-date">Expected 2028</span>
                </div>
                <div className="resume-item-sub">GH Raisoni College of Engineering, Nagpur</div>
                <p className="resume-item-desc">CGPA 7.3/10 · Coursework: DSA · MERN · OOPS</p>
              </div>
            </div>

            <a href={adityaResume} download="Aditya_Yadav_Resume.pdf" style={{ textDecoration: 'none' }} aria-label="Download Aditya Yadav's Resume">
              <button className="download-resume-btn">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Print / Save Resume
              </button>
            </a>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="modal-overlay" onClick={() => setSelectedFile(null)} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrapper">
            {selectedFile === 'Resume' ? (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="var(--file-txt-text)" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            )}
            <span id="modal-title" className="modal-title">{selectedFile === 'Resume' ? 'Aditya_resume.pdf' : `${selectedFile.toLowerCase().replace(/, /g, '_').replace(/ /g, '_')}.txt`}</span>
          </div>
          <button className="modal-close-btn" onClick={() => setSelectedFile(null)} aria-label="Close modal">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          {getFileContent(selectedFile)}
        </div>
      </div>
    </div>
  )
}

export default FileModal
