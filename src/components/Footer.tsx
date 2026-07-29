const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <a
        href="mailto:adityayadav1125@gmail.com"
        className="footer-link"
        onClick={() => {
          navigator.clipboard.writeText('adityayadav1125@gmail.com');
          alert('Email adityayadav1125@gmail.com copied to clipboard!');
        }}
        aria-label="Send an email to Aditya"
      >
        Email
      </a>
      <a href="https://www.instagram.com/adityayadav.1805/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Visit Aditya's Instagram profile">Instagram</a>
      <a href="https://www.linkedin.com/in/aditya-yadav-70454831b" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Visit Aditya's LinkedIn profile">LinkedIn</a>
      <a href="https://github.com/Aditya-collabs" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Visit Aditya's GitHub profile">Github</a>
    </footer>
  )
}

export default Footer
