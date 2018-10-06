import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <div>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input name="name" placeholder="Your Name" type="text" />
          <input name="email" placeholder="name@name.com" type="email" />
          <textarea name="message" />
          <button>Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
