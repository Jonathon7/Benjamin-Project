import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Sidebar from '../components/sidebar'
import TopFooter from '../components/topfooter'

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div>
          <Heading
            title="Contact us"
            subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ipsam itaque non"
          />

          <form
            className="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
          >
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="Email"
              placeholder="Your email.."
            />

            <label for="subject">Message</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div style={{ width: '100%' }}>
          <Sidebar
            title="Contact Information"
            name="Elvie Brown"
            header="Phone Number:"
            subText="432-230-7180"
            header2="Email:"
            subText2="elvie.brown.eb@gmail.com"
          />
        </div>
      </div>
      <TopFooter />
    </Layout>
  )
}

export default Contact
