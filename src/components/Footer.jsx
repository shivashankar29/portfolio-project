import React from 'react'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
function Footer() {
  return (
    <footer>
    <div className="footer">
        <p>Thank you for visiting my portfolio. I look forward to hearing from you!</p>
        <div className="icons">
        <a href="mailto:shivashankar2920@gmail.com" target='blank'><UilEnvelope className="mail"/></a>
        <a href="https://github.com/shivashankar29" target='blank'><UilGithub className="git-hub"/></a>
        <a href="https://www.linkedin.com/in/shiva-shankar29/" target='blank'><UilLinkedin className="linkedin" /></a>
        </div>

        

    </div>
    </footer>
  )
}

export default Footer