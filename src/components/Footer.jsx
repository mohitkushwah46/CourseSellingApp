import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer-body">
        <div className="developer">
        <h1>Developer-Mohit kushwaha</h1>
        <p>email - mohitmsq@gmail.com</p>
        <p>github - @mohitkushwah46</p>
        </div>
        <div className="contact">
            <input type="text" placeholder='Send us message'/>
            <div className="send-email">
                <div className="nothing"></div>
                <div className="send-button">
                    <button>send message</button>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Footer
