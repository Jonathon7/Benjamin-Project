import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <div>
        <form name="contact" method="post" data-netlify="true">
          <input name="name" placeholder="Your Name" type="text" />

          <button>Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
